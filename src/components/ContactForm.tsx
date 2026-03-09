import { site } from "../data/site";

export function ContactForm() {
  return (
    <form
      action={`mailto:${site.sections.contact.emailTo}?subject=Portfolio%20contact`}
      method="post"
      encType="text/plain"
      className="space-y-6"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="text-sm font-medium text-slate-700 dark:text-slate-200">
            Name
          </label>
          <input
            name="name"
            className="mt-2 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-50"
            placeholder="Your name"
            required
          />
        </div>

        <div>
          <label className="text-sm font-medium text-slate-700 dark:text-slate-200">
            Email
          </label>
          <input
            name="email"
            type="email"
            className="mt-2 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-50"
            placeholder="you@email.com"
            required
          />
        </div>
      </div>

      <div>
        <label className="text-sm font-medium text-slate-700 dark:text-slate-200">
          Message
        </label>
        <textarea
          name="message"
          rows={5}
          className="mt-2 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-50"
          placeholder="Write your message..."
          required
        />
      </div>

      <div className="flex justify-center">
        <button
          type="submit"
          className="rounded-md bg-slate-200/80 px-6 py-2 text-sm font-medium text-slate-900 transition hover:bg-slate-300/80 focus-visible:ring-2 focus-visible:ring-slate-400 dark:bg-slate-800 dark:text-slate-50 dark:hover:bg-slate-700"
        >
          Send Message
        </button>
      </div>

      <p className="text-center text-xs text-slate-500 dark:text-slate-400">
        This will open your email client to send the message.
      </p>
    </form>
  );
}