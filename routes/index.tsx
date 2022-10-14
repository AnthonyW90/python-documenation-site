import { Head } from "$fresh/runtime.ts";
import Layout from "../components/Layout.tsx";
import navigation from "$/utils/navigation.ts"

export default function App() {
  return (
    <body class="bg-white dark:bg-slate-900">
      <Head>
        <title>Hello World</title>
      </Head>
      <Layout navigation={navigation}>
      </Layout>
    </body>
  );
}
