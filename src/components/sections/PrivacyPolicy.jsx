import React from 'react';
import useScrollToTop from '../../hooks/useScrollToTop';

const PrivacyPolicy = () => {
  useScrollToTop();
  
  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="prose prose-lg max-w-none">
          <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
            Privacy Policy
          </h1>
          
          <div className="bg-gray-50 p-6 rounded-lg mb-8">
            <p className="text-gray-700 leading-relaxed">
              <strong>White Gloves Studio</strong> is committed to providing quality services to you and this policy outlines our ongoing obligations to you in respect of how we manage your Personal Information.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              We have adopted the Australian Privacy Principles (APPs) contained in the Privacy Act 1988 (Cth) (the Privacy Act). The NPPs govern the way in which we collect, use, disclose, store, secure and dispose of your Personal Information.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              A copy of the Australian Privacy Principles may be obtained from the website of The Office of the Australian Information Commissioner at{' '}
              <a href="https://www.oaic.gov.au/" className="text-blue-600 hover:text-blue-800 underline">
                https://www.oaic.gov.au/
              </a>
              .
            </p>
          </div>

          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                What is Personal Information and why do we collect it?
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Personal Information is information or an opinion that identifies an individual. Examples of Personal Information we collect includes names, addresses, email addresses, phone and facsimile numbers.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                This Personal Information is obtained in many ways including interviews, correspondence, by telephone and facsimile, by email, via our website, from your website, from media and publications, from other publicly available sources, from cookies and from third parties. We don't guarantee website links or policy of authorised third parties.
              </p>
              <p className="text-gray-700 leading-relaxed">
                We collect your Personal Information for the primary purpose of providing our services to you, providing information to our clients and marketing. We may also use your Personal Information for secondary purposes closely related to the primary purpose, in circumstances where you would reasonably expect such use or disclosure. You may unsubscribe from our mailing/marketing lists at any time by contacting us in writing.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Digital File Management
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                In addition to safeguarding your Personal Information, <em>White Gloves Studio</em> takes the handling of your digitised materials seriously. As part of our services, we may create high-resolution digital scans of physical items you provide, such as photographs, documents, artwork, or archival materials.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                We take the following steps to ensure the security, confidentiality, and proper handling of these digital files:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li><strong>Storage:</strong> Digital files are stored on secure, access-controlled cloud-based systems during processing and for a limited time after delivery. All systems used are selected for their security standards and compliance with relevant privacy frameworks.</li>
                <li><strong>Access Control:</strong> Only authorised personnel involved in your project will have access to your files. We do not share or sell any digital content provided by or created for clients.</li>
                <li><strong>Retention:</strong> Final digital files are retained for 90 days following delivery to allow for backup, quality checks, or redelivery if required. After this period, files are permanently deleted unless otherwise agreed upon in writing.</li>
                <li><strong>Client Consent:</strong> We do not retain or use your scanned content for promotional purposes, training, or other purposes without your explicit written consent.</li>
                <li><strong>Sensitive Materials:</strong> For archival or culturally significant items, we follow industry best practices to ensure the integrity and context of materials are preserved.</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                If you have specific requirements or concerns regarding your digital materials, please contact us prior to project commencement.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Sensitive Information
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Sensitive information is defined in the Privacy Act to include information or opinion about such things as an individual's racial or ethnic origin, political opinions, membership of a political association, religious or philosophical beliefs, membership of a trade union or other professional body, criminal record or health information.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Sensitive information will be used by us only:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>For the primary purpose for which it was obtained</li>
                <li>For a secondary purpose that is directly related to the primary purpose</li>
                <li>With your consent; or where required or authorised by law.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Third Parties
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Where reasonable and practicable to do so, we will collect your Personal Information only from you. However, in some circumstances we may be provided with information by third parties. In such a case we will take reasonable steps to ensure that you are made aware of the information provided to us by the third party.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Disclosure of Personal Information
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Your Personal Information may be disclosed in a number of circumstances including the following:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Third parties where you consent to the use or disclosure; and</li>
                <li>Where required or authorised by law.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Security of Personal Information
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Your Personal Information is stored in a manner that reasonably protects it from misuse and loss and from unauthorized access, modification or disclosure.
              </p>
              <p className="text-gray-700 leading-relaxed">
                When your Personal Information is no longer needed for the purpose for which it was obtained, we will take reasonable steps to destroy or permanently de-identify your Personal Information. However, most of the Personal Information is or will be stored in client files which will be kept by us for a minimum of 7 years.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Access to your Personal Information
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                You may access the Personal Information we hold about you and to update and/or correct it, subject to certain exceptions. If you wish to access your Personal Information, please contact us in writing.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                <strong>White Gloves Studio</strong> will not charge any fee for your access request, but may charge an administrative fee for providing a copy of your Personal Information.
              </p>
              <p className="text-gray-700 leading-relaxed">
                In order to protect your Personal Information we may require identification from you before releasing the requested information.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Maintaining the Quality of your Personal Information
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                It is an important to us that your Personal Information is up to date. We will take reasonable steps to make sure that your Personal Information is accurate, complete and up-to-date. If you find that the information we have is not up to date or is inaccurate, please advise us as soon as practicable so we can update our records and ensure we can continue to provide quality services to you.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Policy Updates
              </h2>
              <p className="text-gray-700 leading-relaxed">
                This Policy may change from time to time and is available on our website.
              </p>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Privacy Policy Complaints and Enquiries
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                If you have any queries or complaints about our Privacy Policy please contact us at:
              </p>
              <div className="text-gray-700">
                <p><strong>White Gloves Studio</strong></p>
                <p>Email: info@whiteglovesstudio.com.au</p>
                <p>Phone: [Your business phone number]</p>
                <p>Address: [Your business address]</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicy; 