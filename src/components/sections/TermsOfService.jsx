import React from 'react';
import useScrollToTop from '../../hooks/useScrollToTop';

const TermsOfService = () => {
  useScrollToTop();
  
  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="prose prose-lg max-w-none">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Terms and Conditions
            </h1>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h2 className="text-xl font-semibold text-gray-900 mb-2">
                White Gloves Studio
              </h2>
              <p className="text-gray-700">ABN: 64 363 700 696</p>
              <p className="text-gray-700">Effective Date: 1 July 2025</p>
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                1. Introduction
              </h2>
              <p className="text-gray-700 leading-relaxed">
                These Terms and Conditions govern the provision of digitisation and related services by <em>White Gloves Studio</em> ("we", "us", or "our") to the client ("you" or "your"). By engaging our services, you agree to these Terms.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                2. Services Provided
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We offer professional digitisation services, with a focus on conservation-grade handling and processing of physical materials. Services may include scanning, image enhancement, digital file preparation, metadata tagging, and basic conservation advice.
              </p>
              <p className="text-gray-700 leading-relaxed">
                A detailed scope of work will be agreed upon prior to commencement of services.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                3. Client Responsibilities
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                You agree to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Provide materials in a safe, clean, and legal condition.</li>
                <li>Clearly communicate any sensitivities, fragility, or value associated with the items.</li>
                <li>Retain backup copies (if available) before submitting materials.</li>
                <li>Provide accurate contact and delivery information.</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                You warrant that you own or have the legal right to submit all materials for digitisation.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                4. Handling of Materials
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We apply a conservation-informed approach and take all reasonable care with client materials. However, due to the nature of historical or fragile items, we do not accept liability for degradation, damage, or loss that arises from inherent fragility, pre-existing condition, or transit.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Clients are encouraged to notify us of any special handling requirements before submission.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                5. Digital Files
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We will provide you with high-resolution digital files in the agreed format. Unless otherwise agreed:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Files will be delivered via secure download link or external storage device.</li>
                <li>Files are retained on our systems for 60 days after final delivery, after which they are permanently deleted.</li>
                <li>We do not store or use your files beyond the agreed service period without your consent.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                6. Payment Terms
              </h2>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>A full quote will be provided prior to commencement.</li>
                <li>Payment is due in full upon project completion unless otherwise arranged.</li>
                <li>Accepted payment methods include bank transfer, card payment, or invoicing via our payment platform.</li>
                <li>Late payments may incur an administrative fee after 14 days.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                7. Cancellations and Refunds
              </h2>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>You may cancel your booking at any time before the project commences.</li>
                <li>For cancellations after work has begun, you may be charged for work completed to date.</li>
                <li>Refunds are not issued once digital files have been delivered, except in the case of service error or breach.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                8. Turnaround Time
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Estimated delivery timelines will be provided upon booking. While we strive to meet deadlines, timelines may vary depending on material complexity and volume. Delays caused by force majeure or unforeseen circumstances are not grounds for penalty.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                9. Confidentiality and Privacy
              </h2>
              <p className="text-gray-700 leading-relaxed">
                We respect your privacy and manage all personal information and digital content in accordance with our Privacy Policy. We do not share, publish, or reproduce your materials without explicit written consent.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                10. Intellectual Property
              </h2>
              <p className="text-gray-700 leading-relaxed">
                You retain ownership of your original materials and any intellectual property rights associated with them. We retain no rights to the digital files we create unless agreed in writing (e.g. for portfolio or educational use).
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                11. Liability
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                To the fullest extent permitted by law:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>We exclude all warranties except those required by law.</li>
                <li>Our liability is limited to re-performing the services or refunding the fee paid.</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                We are not liable for indirect loss, consequential damage, or loss of data once digital delivery is completed.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                12. Governing Law
              </h2>
              <p className="text-gray-700 leading-relaxed">
                These Terms are governed by the laws of Queensland, Australia. Any disputes will be resolved in accordance with Australian consumer law.
              </p>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                13. Contact Details
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                For any enquiries, contact:
              </p>
              <div className="text-gray-700">
                <p className="font-semibold">White Gloves Studio</p>
                <p>Email: hello@whiteglovesstudio.com.au</p>
                <p>ABN: 64 363 700 696</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TermsOfService; 