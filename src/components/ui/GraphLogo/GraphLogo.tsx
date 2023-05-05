import * as React from 'react';
import { SVGProps } from 'react';
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="m19.49 4.012 7.198 4.156a3.127 3.127 0 0 1 4.971.583 3.13 3.13 0 0 1-1.974 4.596v8.31a3.108 3.108 0 0 1 1.966 4.595 3.126 3.126 0 0 1-5.036.514l-7.153 4.13A3.122 3.122 0 0 1 16.5 35a3.118 3.118 0 0 1-2.993-4.003L6.31 26.845a3.122 3.122 0 1 1-2.992-5.19l.001-8.311A3.123 3.123 0 0 1 1.339 8.75a3.124 3.124 0 0 1 4.969-.59l7.2-4.157A3.117 3.117 0 0 1 16.5 0a3.116 3.116 0 0 1 2.99 4.012Zm-.75 1.279c-.028.03-.054.057-.085.084l9.423 16.32c.038-.014.081-.024.12-.034v-8.323a3.114 3.114 0 0 1-2.273-3.774c.009-.035.018-.072.028-.105L18.74 5.29Zm-4.397.086-.088-.088-7.212 4.16a3.115 3.115 0 0 1-2.131 3.857c-.038.012-.074.02-.11.03v8.325l.122.033 9.422-16.319-.003.002Zm3.027.74a3.145 3.145 0 0 1-1.738 0l-9.42 16.316c.428.413.731.941.874 1.519h18.829c.141-.58.448-1.11.88-1.523L17.37 6.116Zm1.438 23.664 7.165-4.14a2.529 2.529 0 0 1-.055-.206H7.082l-.03.12 7.202 4.16a3.1 3.1 0 0 1 2.246-.952 3.12 3.12 0 0 1 2.308 1.018Z" />
  </svg>
);
export default SvgComponent;