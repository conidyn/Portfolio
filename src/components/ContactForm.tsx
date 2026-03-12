"use client";

import { useSubmit } from "@formspree/react";
import { useForm } from "react-hook-form";

type ContactFormValues = {
  name: string;
  email: string;
  message: string;
};

export function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<ContactFormValues>();

  const submit = useSubmit<ContactFormValues>("mwvrbpoe");

  if (isSubmitSuccessful) {
    return (
      <div className="space-y-4 text-center">
        <p className="text-base font-medium text-slate-900 dark:text-slate-50">
          Message sent successfully.
        </p>

        <p className="text-sm text-slate-600 dark:text-slate-300">
          Thank you for your message. I will get back to you soon.
        </p>

        <button
          type="button"
          onClick={() => reset()}
          className="rounded-md bg-slate-200/80 px-6 py-2 text-sm font-medium text-slate-900 transition hover:bg-slate-300/80 focus-visible:ring-2 focus-visible:ring-slate-400 dark:bg-slate-800 dark:text-slate-50 dark:hover:bg-slate-700"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <>
      <form onSubmit={handleSubmit(submit)} className="space-y-6" noValidate>
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label
              htmlFor="contact-name"
              className="text-sm font-medium text-slate-700 dark:text-slate-200"
            >
              Name or Company
            </label>

            <input
              id="contact-name"
              type="text"
              placeholder="Your name or company"
              aria-invalid={errors.name ? "true" : "false"}
              className="mt-2 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-50"
              {...register("name", {
                required: "Please enter your name or company.",
              })}
            />

            {errors.name && (
              <p className="mt-2 text-sm text-red-600 dark:text-red-400">
                {errors.name.message}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="contact-email"
              className="text-sm font-medium text-slate-700 dark:text-slate-200"
            >
              Email
            </label>

            <input
              id="contact-email"
              type="email"
              placeholder="you@email.com"
              aria-invalid={errors.email ? "true" : "false"}
              className="mt-2 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-50"
              {...register("email", {
                required: "Please enter your email address.",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Please enter a valid email address.",
                },
              })}
            />

            {errors.email && (
              <p className="mt-2 text-sm text-red-600 dark:text-red-400">
                {errors.email.message}
              </p>
            )}
          </div>
        </div>

        <div>
          <label
            htmlFor="contact-message"
            className="text-sm font-medium text-slate-700 dark:text-slate-200"
          >
            Message
          </label>

          <textarea
            id="contact-message"
            rows={5}
            placeholder="Write your message..."
            aria-invalid={errors.message ? "true" : "false"}
            className="mt-2 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-50"
            {...register("message", {
              required: "Please enter your message.",
              minLength: {
                value: 10,
                message: "Your message must contain at least 10 characters.",
              },
            })}
          />

          {errors.message && (
            <p className="mt-2 text-sm text-red-600 dark:text-red-400">
              {errors.message.message}
            </p>
          )}
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            disabled={isSubmitting}
            className="rounded-md bg-slate-200/80 px-6 py-2 text-sm font-medium text-slate-900 transition hover:bg-slate-300/80 focus-visible:ring-2 focus-visible:ring-slate-400 disabled:cursor-not-allowed disabled:opacity-60 dark:bg-slate-800 dark:text-slate-50 dark:hover:bg-slate-700"
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
        </div>
      </form>

      <p className="mt-6 text-center text-sm text-slate-600 dark:text-slate-300">
        Or email me directly at{" "}
        <a
          href="mailto:Nicolas%20Doyen<nicolas.doyen@hotmail.be>?subject=Portfolio%20contact"
          className="font-medium text-indigo-600 hover:underline dark:text-indigo-400"
        >
          nicolas.doyen@hotmail.be
        </a>
      </p>
    </>
  );
}