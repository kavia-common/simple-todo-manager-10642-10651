import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Link } from "@builder.io/qwik-city";

// PUBLIC_INTERFACE
export default component$(() => {
  return (
    <div class="page-container">
      <h1 class="main-title">Welcome</h1>
      <p style={{ marginTop: "1rem", fontWeight: 300 }}>
        View the converted Figma screen:
      </p>
      <p>
        <Link href="/home">Open Home Screen</Link>
      </p>
    </div>
  );
});

export const head: DocumentHead = {
  title: "todo_frontend",
  meta: [
    {
      name: "description",
      content: "Ultralight Qwik template with a converted Home screen.",
    },
  ],
};
