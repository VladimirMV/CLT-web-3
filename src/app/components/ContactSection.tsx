import { motion } from 'motion/react';
import { useInView } from './hooks/useInView';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Send, Mail, Phone, MapPin } from 'lucide-react';
import { useState } from 'react';
import { Language, translations } from '../translations';

interface ContactSectionProps {
  language: Language;
}

const formSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  company: z.string().min(2, 'Company name required'),
  email: z.string().email('Valid email required'),
  phone: z.string().min(5, 'Phone number required'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
  consent: z.boolean().refine(val => val === true, 'Consent required'),
});

type FormData = z.infer<typeof formSchema>;

export function ContactSection({ language }: ContactSectionProps) {
  const { ref, isInView } = useInView();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const t = translations[language].contact;

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    console.log('Form data:', data);
    setIsSubmitted(true);
    reset();
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <section id="contact" ref={ref} className="py-24 lg:py-32 bg-[var(--deep-space)] relative overflow-hidden">
      {/* Background effects */}
      <motion.div
        className="absolute top-0 left-0 w-96 h-96 bg-[var(--laser-blue)]/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-96 h-96 bg-[var(--laser-green)]/10 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.1, 0.2],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
      />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-[var(--laser-blue)] text-sm tracking-[0.2em] uppercase mb-4 block">
              {t.badge}
            </span>
            <h2 className="text-4xl lg:text-5xl text-[var(--foreground)] mb-6">
              {t.title}
            </h2>
            <p className="text-xl text-[var(--neutral-gray)] max-w-2xl mx-auto">
              {t.description}
            </p>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-[var(--dark-space)] border border-[var(--laser-blue)]/30 rounded-2xl p-8 lg:p-12"
          >
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <div className="w-20 h-20 rounded-full bg-[var(--laser-green)]/20 flex items-center justify-center mx-auto mb-6">
                  <div className="w-10 h-10 rounded-full bg-[var(--laser-green)] flex items-center justify-center">
                    ✓
                  </div>
                </div>
                <h3 className="text-2xl text-[var(--foreground)] mb-4">{t.form.success}</h3>
                <p className="text-[var(--neutral-gray)]">
                  {t.form.successMessage}
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block text-[var(--foreground)] mb-2">
                      {t.form.name.label} *
                    </label>
                    <input
                      {...register('name')}
                      type="text"
                      id="name"
                      className="w-full bg-[var(--deep-space)] border border-[var(--laser-blue)]/30 rounded-lg px-4 py-3 text-[var(--foreground)] focus:border-[var(--laser-blue)] focus:outline-none focus:ring-2 focus:ring-[var(--laser-blue)]/20 transition-all"
                      placeholder={t.form.name.placeholder}
                    />
                    {errors.name && (
                      <p className="text-[var(--alert-red)] text-sm mt-1">{errors.name.message}</p>
                    )}
                  </div>

                  {/* Company */}
                  <div>
                    <label htmlFor="company" className="block text-[var(--foreground)] mb-2">
                      {t.form.company.label} *
                    </label>
                    <input
                      {...register('company')}
                      type="text"
                      id="company"
                      className="w-full bg-[var(--deep-space)] border border-[var(--laser-blue)]/30 rounded-lg px-4 py-3 text-[var(--foreground)] focus:border-[var(--laser-blue)] focus:outline-none focus:ring-2 focus:ring-[var(--laser-blue)]/20 transition-all"
                      placeholder={t.form.company.placeholder}
                    />
                    {errors.company && (
                      <p className="text-[var(--alert-red)] text-sm mt-1">{errors.company.message}</p>
                    )}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-[var(--foreground)] mb-2">
                      {t.form.email.label} *
                    </label>
                    <input
                      {...register('email')}
                      type="email"
                      id="email"
                      className="w-full bg-[var(--deep-space)] border border-[var(--laser-blue)]/30 rounded-lg px-4 py-3 text-[var(--foreground)] focus:border-[var(--laser-blue)] focus:outline-none focus:ring-2 focus:ring-[var(--laser-blue)]/20 transition-all"
                      placeholder={t.form.email.placeholder}
                    />
                    {errors.email && (
                      <p className="text-[var(--alert-red)] text-sm mt-1">{errors.email.message}</p>
                    )}
                  </div>

                  {/* Phone */}
                  <div>
                    <label htmlFor="phone" className="block text-[var(--foreground)] mb-2">
                      {t.form.phone.label} *
                    </label>
                    <input
                      {...register('phone')}
                      type="tel"
                      id="phone"
                      className="w-full bg-[var(--deep-space)] border border-[var(--laser-blue)]/30 rounded-lg px-4 py-3 text-[var(--foreground)] focus:border-[var(--laser-blue)] focus:outline-none focus:ring-2 focus:ring-[var(--laser-blue)]/20 transition-all"
                      placeholder={t.form.phone.placeholder}
                    />
                    {errors.phone && (
                      <p className="text-[var(--alert-red)] text-sm mt-1">{errors.phone.message}</p>
                    )}
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-[var(--foreground)] mb-2">
                    {t.form.message.label} *
                  </label>
                  <textarea
                    {...register('message')}
                    id="message"
                    rows={5}
                    className="w-full bg-[var(--deep-space)] border border-[var(--laser-blue)]/30 rounded-lg px-4 py-3 text-[var(--foreground)] focus:border-[var(--laser-blue)] focus:outline-none focus:ring-2 focus:ring-[var(--laser-blue)]/20 transition-all resize-none"
                    placeholder={t.form.message.placeholder}
                  />
                  {errors.message && (
                    <p className="text-[var(--alert-red)] text-sm mt-1">{errors.message.message}</p>
                  )}
                </div>

                {/* Consent */}
                <div className="flex items-start gap-3">
                  <input
                    {...register('consent')}
                    type="checkbox"
                    id="consent"
                    className="mt-1 w-4 h-4 rounded border-[var(--laser-blue)]/30 bg-[var(--deep-space)] text-[var(--laser-blue)] focus:ring-[var(--laser-blue)] focus:ring-offset-0"
                  />
                  <label htmlFor="consent" className="text-[var(--neutral-gray)] text-sm">
                    {t.form.consent.label} *
                  </label>
                </div>
                {errors.consent && (
                  <p className="text-[var(--alert-red)] text-sm">{errors.consent.message}</p>
                )}

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-8 py-4 bg-[var(--laser-blue)] text-[var(--dark-space)] rounded-lg hover:bg-[var(--laser-green)] transition-all duration-300 shadow-[0_0_30px_rgba(0,212,255,0.4)] hover:shadow-[0_0_40px_rgba(0,255,157,0.6)] hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                        className="w-5 h-5 border-2 border-[var(--dark-space)] border-t-transparent rounded-full"
                      />
                      <span>{t.form.submit.loading}</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>{t.form.submit.label}</span>
                    </>
                  )}
                </button>

                <p className="text-[var(--neutral-gray)] text-sm text-center">
                  {t.form.submit.disclaimer}
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}