import { createSignal } from 'solid-js';
import * as yup from 'yup';

const schema = yup.object().shape({
  email: yup.string().email().required(),
  message: yup.string().required(),
});

export default function Contact() {
  const [emailInfo, setEmailInfo] = createSignal({ email: '', message: '' });
  const [error, setError] = createSignal('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await schema.validate(emailInfo);
      setError('');
      setEmailInfo({ email: '', message: '' });
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="flex flex-col gap-2 items-center justify-center" id="Contact">
      <div class="mb-4 flex items-center justify-center gap-4 w-full">
        <div class="flex-grow border-t border-gray-400 opacity-50" />

        <h2 className="text-3xl text-secondary-500">Contact</h2>

        <div class="flex-grow border-t border-gray-400 opacity-50" />
      </div>

      <p class="text-center text-white-300 text-lg w-3/4 md:w-1/2 mb-4">
        Although I am currently not looking for any new opportunities, we can still talk and get to
        know each other. I will try my best to get back to you!
      </p>
      <a
        href="mailto:sncalvo5@gmail.com"
        className="primary-actionable"
        rel="noopener noreferrer"
        target="mailme"
      >
        Say Hi!
      </a>
    </div>
  );
}
