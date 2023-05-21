import { TabsContainer } from '@/components/Editor/TabsContainer/TabsContainer';
import { Grid } from '@mui/material';
import { EditorHeader } from '@/components/Editor/EditorHeader/EditorHeader';
import { Editor } from '@/components/Editor/Editor/Editor';
import { Response } from '@/components/Response/Response';
import EditorVars from '../EditorVars/EditorVars';

export function EditorContainer() {
  return (
    <div className="pt-12">
      <TabsContainer />
      <Grid
        className="pl-4"
        container
        direction="row"
        justifyContent="center"
        alignItems="flex-start"
        spacing={1}
      >
        <Grid item md={6} xs={12}>
          <div className="flex mt-[10px] min-h-[50vh] bg-white rounded-lg">
            <div className="p-8 grow">
              <EditorHeader />
              <Editor isRequest={true} />
              <EditorVars />
            </div>
          </div>
        </Grid>

        <Grid item md={6} xs={12}>
          <Response />
        </Grid>
      </Grid>
    </div>
  );
}
