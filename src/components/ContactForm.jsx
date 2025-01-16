import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import axiosInstance from "../client/axiosInstence";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useTranslation } from "react-i18next";

export default function ContactForm() {
  const { t } = useTranslation();
  const { form } = t("contact", { returnObjects: true });
  const schema = yup.object().shape({
    firstName: yup.string().required(form.firstName.error),
    lastName: yup.string().required(form.lastName.error),
    email: yup
      .string()
      .email(form.email.invalidError)
      .required(form.email.error),
    subject: yup.string().required(form.subject.error),
    message: yup.string().required(form.message.error),
    terms: yup.bool().oneOf([true], form.term.error),
  });

  const {
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [loading, setLoading] = useState(false);

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      await axiosInstance.post("/landing-contacts", data, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log("Message sent:", data);
      toast.success("Message envoyé avec succès!");
      reset();
    } catch (error) {
      console.error("Error sending message:", error);
      toast.error("Échec de l'envoi du message");
    } finally {
      setLoading(false);
    }
  };
   const options = t("contact.form.subject.options", { returnObjects: true });
  return (
    <>
      <form id="contact-form" onSubmit={handleSubmit(onSubmit)}>
        <div className="row gx-3 gy-4">
          <div className="col-md-6">
            <div className="form-group">
              <label className="form-label">{form.firstName.label}</label>
              <Controller
                name="firstName"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <input
                    {...field}
                    placeholder={form.firstName.placeholder}
                    className={`form-control ${
                      errors.firstName ? "is-invalid" : ""
                    }`}
                  />
                )}
              />
              {errors.firstName && (
                <div className="invalid-feedback">
                  {errors.firstName.message}
                </div>
              )}
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label className="form-label">{form.lastName.label}</label>
              <Controller
                name="lastName"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <input
                    {...field}
                    placeholder={form.lastName.placeholder}
                    className={`form-control ${
                      errors.lastName ? "is-invalid" : ""
                    }`}
                  />
                )}
              />
              {errors.lastName && (
                <div className="invalid-feedback">
                  {errors.lastName.message}
                </div>
              )}
            </div>
          </div>
          <div className="col-md-12">
            <div className="form-group">
              <label className="form-label">{form.email.label}</label>
              <Controller
                name="email"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <input
                    {...field}
                    placeholder={form.email.placeholder}
                    className={`form-control ${
                      errors.email ? "is-invalid" : ""
                    }`}
                    type="email"
                  />
                )}
              />
              {errors.email && (
                <div className="invalid-feedback">{errors.email.message}</div>
              )}
            </div>
          </div>
          <div className="col-12">
            <div className="form-group">
              <label className="form-label">{form.subject.label}</label>
              <Controller
                name="subject"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <select
                    {...field}
                    className={`form-control ${
                      errors.subject ? "is-invalid" : ""
                    }`}
                  >
                    <option  value="" disabled>
                      {form.subject.placeholder}
                    </option>
                    {Object.entries(options).map(([value, label]) => (
                      <option key={value} value={value}>
                        {label}
                      </option>
                    ))}
                  </select>
                )}
              />
              {errors.subject && (
                <div className="invalid-feedback">{errors.subject.message}</div>
              )}
            </div>
          </div>

          <div className="col-md-12">
            <div className="form-group">
              <label className="form-label">{form.message.label}</label>
              <Controller
                name="message"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <textarea
                    {...field}
                    placeholder={form.message.placeholder}
                    rows={4}
                    className={`form-control ${
                      errors.message ? "is-invalid" : ""
                    }`}
                  />
                )}
              />
              {errors.message && (
                <div className="invalid-feedback">{errors.message.message}</div>
              )}
            </div>
          </div>
          <div className="col-md-12">
            <div className="form-check">
              <Controller
                name="terms"
                control={control}
                defaultValue={false}
                render={({ field }) => (
                  <input
                    {...field}
                    className={`form-check-input ${
                      errors.terms ? "is-invalid" : ""
                    }`}
                    type="checkbox"
                    id="term-condation"
                  />
                )}
              />
              <label className="form-label" htmlFor="term-condation">
                {form.term.label1}{" "}
                <a
                  href="/term-condition"
                  target="_blank"
                  style={{ color: "#5e17eb" }}
                >
                  {form.term.label2}
                </a>
                .
              </label>
              {errors.terms && (
                <div className="invalid-feedback">{errors.terms.message}</div>
              )}
            </div>
          </div>
          <div className="col-md-12">
            <div className="send">
              <button
                className={`px-btn w-100 ${loading ? "disabled" : ""}`}
                type="submit"
                disabled={loading}
              >
                {loading ? form.btn.loading : form.btn.text}
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}
