function getAge(dateString: string) {
  var today = new Date();
  var birthDate = new Date(dateString);
  var age = today.getFullYear() - birthDate.getFullYear();
  var m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
}

interface PresentationParagraphProps {
  name: string;
  position: string;
  birthDate: string;
  place: string;
}

export default function PresentationParagraph({
  name,
  position,
  birthDate,
  place,
}: PresentationParagraphProps) {
  const age = getAge(birthDate);

  return (
    <div>
      <div class="font-semibold text-sm md:text-2xl text-white">
        <div>
          <h1>
            <span class="text-secondary-500">const</span> name <span class="text-red-400">=</span>{' '}
            <span class="text-green-500 capitalize">'{name}'</span>;
          </h1>
          <p>
            <span class="text-secondary-500">let</span> age <span class="text-red-400">=</span>{' '}
            <span class="text-green-500 capitalize">'{age}'</span>;
          </p>
          <div>
            <div>
              <span class="text-secondary-500">const</span> currentJob{' '}
              <span class="text-red-400">=</span> <span class="text-yellow-600">&#123;</span>
              <br />
              &ensp; position: <span class="text-green-500 capitalize">'{position}'</span>,<br />
              &ensp; place: <span class="text-green-500 capitalize">'{place}'</span>,<br />
            </div>
            <div class="flex flex-row">
              <span class="text-yellow-600">&#125;</span>
              <div class="cursor-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
