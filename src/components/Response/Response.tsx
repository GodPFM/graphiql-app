import React, { useEffect, useLayoutEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { selectEditor } from '@/store/reducers/editor/slice';
import { useGetDataMutation } from '@/store/api';
import { updateActiveTab } from '@/store/reducers/editorTabs/slice';
import { ClipboardStatic } from '@/components/ui/ClipboardSVG/ClipboardStatic';
import { ClipboardSuccess } from '@/components/ui/ClipboardSVG/ClipboardSuccess';
import { ResponseButton } from '@/components/ui/ResponseButton/ResponseButton';
import { DownloadResponseSVG } from '@/components/ui/DownloadResponseSVG/DownloadResponseSVG';

export const Response = () => {
  // берем из слайса сформированный query, variables, headers в редакторе
  // либо уже готвый ответ, зависит от реализации
  const { activeTabId, tabs } = useAppSelector((state) => state.editorTab);
  const [previousActiveTabId, setPreviousActiveTabId] = useState<number | undefined>(activeTabId);
  const dispatch = useAppDispatch();
  const { query, variables } = useAppSelector(selectEditor);
  const [response, setResponse] = useState<string | undefined>();
  const [clipboardClicked, setClipboardClicked] = useState(false);
  const [getResp, { data, isSuccess, isLoading, isError }] = useGetDataMutation();

  useLayoutEffect(() => {
    if (query !== '') {
      getResp({ query, variables: variables ? variables : undefined });
    }
  }, [query]);

  useEffect(() => {
    const tabInfo = tabs.filter((item) => item.id == activeTabId);
    if (!isLoading) {
      setPreviousActiveTabId(activeTabId);
    }
    if (tabInfo.length === 1 && tabInfo[0]) {
      if (tabInfo[0].responseCode) {
        setResponse(tabInfo[0].responseCode);
      } else {
        setResponse(undefined);
      }
    } else {
      setResponse(undefined);
    }
  }, [activeTabId]);

  useEffect(() => {
    if (isLoading) {
      setResponse('');
    } else {
      setPreviousActiveTabId(activeTabId);
    }
  }, [isLoading]);

  useEffect(() => {
    const stringData = JSON.stringify(data, null, '  ');
    if (previousActiveTabId === activeTabId) {
      setResponse(stringData);
    }
    dispatch(
      updateActiveTab({ code: stringData, isRequest: false, activeId: previousActiveTabId })
    );
  }, [data]);

  const copyResponse = async () => {
    if (typeof response === 'string') {
      await navigator.clipboard.writeText(response);
      setClipboardClicked(true);
      setTimeout(() => {
        setClipboardClicked(false);
      }, 500);
    }
  };

  const downloadResponseFile = () => {
    if (response) {
      const blob = new Blob([response], { type: 'text/plain' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.download = 'response.json';
      link.href = url;
      link.click();
    }
  };

  return (
    <div className="font-SourceCodePro text-color-documentation-primary">
      {isLoading && activeTabId === previousActiveTabId && <div>skeleton loading</div>}
      {isSuccess && response?.length && (
        <div className="relative">
          <div className="absolute top-0 right-5">
            <ResponseButton onClickFnc={copyResponse}>
              {!clipboardClicked ? <ClipboardStatic /> : <ClipboardSuccess />}
            </ResponseButton>
            <ResponseButton onClickFnc={downloadResponseFile}>
              <DownloadResponseSVG />
            </ResponseButton>
          </div>
          <pre className="break-all font-SourceCodePro whitespace-pre-wrap h-[65vh] overflow-auto text-sm">
            {response ? response : ''}
          </pre>
        </div>
      )}
      {isError && activeTabId === previousActiveTabId && <>Error</>}
    </div>
  );
};
