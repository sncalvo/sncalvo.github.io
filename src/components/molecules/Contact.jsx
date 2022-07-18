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
    <div className="flex flex-col gap-2" id="Contact">
      <h1 className="text-3xl text-secondary-500 mb-2">Contact:</h1>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col space-y-2 p-2 border rounded border-secondary-500 relative">
          <label htmlFor="email" className="text-secondary-500">
            Email
          </label>
          <input
            id="email"
            type="email"
            value={emailInfo().email}
            onChange={(e) => setEmailInfo((prevState) => ({ ...prevState, email: e.target.value }))}
            className="w-full p-2 border rounded border-secondary-500 text-secondary-500 bg-transparent"
          />
          <label htmlFor="message" className="text-secondary-500">
            Message
          </label>
          <textarea
            id="message"
            value={emailInfo().message}
            onChange={(e) =>
              setEmailInfo((prevState) => ({ ...prevState, message: e.target.value }))
            }
            className="w-full p-2 border rounded border-secondary-500 text-secondary-500 bg-transparent"
          />
          <button
            type="submit"
            className="w-full hover:text-secondary-500 text-white p-2 border rounded border-secondary-500 bg-secondary-500 focus:outline-double transition-all duration-300 delay-100 hover:bg-white shadow shadow-secondary-500"
          >
            Send
          </button>
        </div>
      </form>
      {error && <p className="bg-red-500 text-white">{error}</p>}
    </div>
  );
}