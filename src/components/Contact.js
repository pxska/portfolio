import styles from '@/styles/Index.module.scss';

function Contact() {
  const copyToClipboard = () => {
    const link = document.getElementById('email');

    navigator.clipboard.writeText(link.innerText);
  };

  return (
    <div className="flex">
      <div className="w-3/12 sm:hidden">
        <h1 className="font-bold">Contact</h1>
      </div>

      <div className="w-9/12 sm:w-full">
        <p className="mb-8">
          <span>Contact me at </span>
          <button id="email" className={styles.link} onClick={copyToClipboard}>
            kristjanposka@gmail.com
          </button>
          <span className="text-gray-500">
            {' <– click it to copy to clipboard.'}
          </span>
        </p>
      </div>
    </div>
  );
}

export default Contact;
