import { createSignal } from 'solid-js';

const PageLink = ({ name, id }) => (
  <li class="flex z-10">
    <a
      href={`#${id}`}
      class="text-secondary-500 w-full hover:text-white p-2 border-2 rounded border-secondary-500 hover:bg-secondary-500 focus:outline-dotted focus:outline-3 transition-all duration-300 delay-100"
    >
      <span class="sr-only">{name}</span>
      <span>{name}</span>
    </a>
  </li>
);

export default function SolidCounter() {
  const [open, setOpen] = createSignal(false);

  const toggle = () => setOpen(!open());

  return (
    <div class="fixed z-10 p-3">
      <button
        id="solid"
        class="transition-all rounded duration-300 delay-100 text-secondary-500 hover:text-white w-10 h-10 relative focus:outline-secondary-500 focus:outline-4 border-secondary-500 border-2 hover:bg-secondary-500 hover:border-0"
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
        <ul
          class="transition-all duration-300 absolute left-0 transform p-3 items-stretch"
          classList={{
            '-translate-x-full': !open(),
          }}
        >
          <div class="flex flex-col space-y-2 p-2 border-2 rounded border-secondary-500 relative">
            <div class="absolute left-0 top-0 bottom-0 right-0 bg-primary-500 blur-sm z-0"></div>
            <PageLink name="Presentation" id="Presentation" />
            <PageLink name="Skill Set" id="SkillSet" />
            <PageLink name="About" id="About" />
            <PageLink name="Tech Set" id="TechSet" />
            <PageLink name="Contact" id="Contact" />
          </div>
        </ul>
      </nav>
    </div>
  );
}
