import PageLayoutDefault from "../layouts/PageDefault";

import { title } from "@/components/primitives";

export default function home() {
  return (
    <PageLayoutDefault>
      <h1 className={title()}>Docs</h1>
    </PageLayoutDefault>
  );
}
