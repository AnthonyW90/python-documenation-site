import { Handlers } from "$fresh/server.ts"
import { gfm } from "@/utils/markdown.ts"

const CSS = `
${gfm.CSS}
.markdown-body {
  color: #0f172a;
}



.markdown-body, table, tbody, tr{
  width: 100%;
}

.markdown-body td:first-child:nth-last-child(2){
  width: 50%;
}

@media (prefers-color-scheme:dark) {
  h1, h2, h3, h4, h5, h6 {
    color: white;
  }

  .markdown-body {
    color: #94a3b8;
    background-color: #0f172a;
  }

  .markdown-body a {
    color: #22d3ee;
  }
  
  .markdown-body code {
    color: white;
  }

  .markdown-body pre {
    background-color: #334155;
  }
  .markdown-body .highlight pre {
    background-color: #334155;
  }
  
  .markdown-body table {
    color: #e2e8f0;
  }

  .markdown-body table td, .markdown-body table th {
    border: 1px solid #0f172a;
  }

  .markdown-body table tr{
    background-color: #334155;
  }

  .markdown-body table tr:nth-child(2n){
    background-color: #4b5563;
  }
}
`

export const handler: Handlers = {
  GET: () => {
    return new Response(CSS, {
      headers: {
        "content-type": "text/css",
      },
    })
  }
}