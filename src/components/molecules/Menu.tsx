import { type Component, createSignal } from 'solid-js';

interface PageLinkProps {
  name: string;
  link: string;
}

const PageLink: Component<PageLinkProps> = ({ name, link }) => (
  <li class="flex z-10">
    <a href={link} class="primary-actionable w-full">
      <span class="sr-only">{name}</span>
      <span>{name}</span>
    </a>
  </li>
);

export default function Menu() {
  const [open, setOpen] = createSignal(false);

  const toggle = () => setOpen(!open());

  return (
    <div class="fixed z-20 p-3">
      <button
        class="transition-all rounded duration-300 delay-100 text-secondary-500 hover:text-white w-10 h-10 relative focus:outline-secondary-500 focus:outline-4 border-secondary-500 border bg-primary-500 hover:bg-secondary-500 hover:border-0 shadow shadow-secondary-500"
        type="button"
        onClick={toggle}
      >
        <span class="sr-only">Open main menu</span>
        <div class="block w-5 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <span
            class="block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out"
            classList={{
              'translate-y-1.5': !open(),
              'rotate-45': open(),
            }}
          />
          <span
            class="block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out"
            classList={{ 'opacity-0': open() }}
          />
          <span
            class="block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out"
            classList={{
              '-translate-y-1.5': !open(),
              '-rotate-45': open(),
            }}
          />
        </div>
      </button>
      <nav>
        <div
          class="transition-all duration-300 absolute left-0 pt-2 pl-2 transform items-stretch"
          classList={{
            '-translate-x-full': !open(),
          }}
        >
          <div class="absolute left-2 top-2 bottom-0 right-0 bg-primary-500 blur-sm z-10" />
          <ul class="flex flex-col space-y-2 p-2 border rounded border-secondary-500 z-20 relative">
            <PageLink name="Presentation" link="/#Presentation" />
            <PageLink name="Skill Set" link="/#SkillSet" />
            <PageLink name="About" link="/#About" />
            <PageLink name="Tech Set" link="/#TechSet" />
            <PageLink name="Experience" link="/#Experiences" />
            <PageLink name="Blog" link="/blog" />
            <PageLink name="Contact" link="/#Contact" />
          </ul>
        </div>
      </nav>
    </div>
  );
}
