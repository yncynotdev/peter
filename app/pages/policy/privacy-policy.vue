<script setup>
definePageMeta({
  layout: "policy",
});
</script>

<template>
  <UPageCard :ui="{ root: 'bg-elevated ring ring-muted shadow-lg shadow-default/5 p-7' }">
    <h1>Privacy Policy</h1>
    <p><strong>Effective Date:</strong> August 31, 2026</p>

    <p>
      This Privacy Policy explains how PETER ("PETER", "we", "us", or "our") handles information in
      connection with the PETER website, applications, demonstrations, and related services.
    </p>
    <p>
      PETER is designed to provide organizations with attendance-management capabilities while
      following a privacy-conscious approach to handling personal information.
    </p>

    <section>
      <h2>1. About PETER</h2>
      <p>
        PETER is an actively developed attendance-management system intended to serve real
        organizational needs.
      </p>
      <p>
        The system provides functionality such as clock-in and clock-out, attendance records,
        organization workflows, and face-based verification.
      </p>
      <p>
        PETER is designed with the goal of minimizing unnecessary collection and retention of
        personal information.
      </p>
    </section>

    <section>
      <h2>2. Information We May Collect</h2>
      <p>
        Depending on how PETER is deployed and used, the system may process information such as:
      </p>
      <ul>
        <li>Name;</li>
        <li>Employee or member identification information;</li>
        <li>Attendance dates and times;</li>
        <li>Clock-in and clock-out records;</li>
        <li>Attendance status;</li>
        <li>Organization or department information;</li>
        <li>Account information;</li>
        <li>Device or browser information;</li>
        <li>Technical logs necessary for operating and securing the Service; and</li>
        <li>
          Images captured during attendance verification, depending on the deployment configuration.
        </li>
      </ul>
      <p>
        The exact information collected may differ between organizations and deployment
        environments.
      </p>
    </section>

    <section>
      <h2>3. Face Detection and Biometric Information</h2>
      <p>PETER may use face detection as part of its attendance-verification process.</p>
      <p>
        PETER is designed so that biometric data is not stored as a permanent biometric database for
        attendance verification.
      </p>
      <p>
        A camera image may be temporarily processed or transmitted depending on the deployment
        configuration in order to perform the attendance workflow. The precise handling of images
        may therefore vary between deployments.
      </p>
      <p>
        Organizations using PETER are responsible for determining the appropriate legal basis,
        notices, consent requirements, retention periods, and other privacy obligations applicable
        to their use of face-based attendance verification.
      </p>
      <p>
        PETER should not be understood as providing legal advice regarding biometric or privacy
        compliance.
      </p>
    </section>

    <section>
      <h2>4. Attendance Information</h2>
      <p>Attendance information may include:</p>
      <ul>
        <li>The identity of the person recording attendance;</li>
        <li>Date and time of attendance;</li>
        <li>Clock-in or clock-out status;</li>
        <li>Verification status;</li>
        <li>Organization-related information; and</li>
        <li>Other information required to operate the attendance workflow.</li>
      </ul>
      <p>
        This information is generally processed to provide attendance-management functionality to
        the organization using PETER.
      </p>
      <p>
        The organization operating a PETER deployment may determine how attendance information is
        used, retained, reviewed, and managed.
      </p>
    </section>

    <section>
      <h2>5. How Information Is Used</h2>
      <p>Information processed through PETER may be used to:</p>
      <ul>
        <li>Record attendance;</li>
        <li>Verify attendance attempts;</li>
        <li>Reduce attendance fraud such as buddy-punching;</li>
        <li>Manage employee or member attendance;</li>
        <li>Provide organization-specific workflows;</li>
        <li>Maintain and improve the Service;</li>
        <li>Diagnose technical problems;</li>
        <li>Protect the Service against abuse or unauthorized access; and</li>
        <li>Comply with applicable legal obligations.</li>
      </ul>
      <p>
        We do not intend to use attendance information for purposes unrelated to providing or
        supporting the Service unless otherwise disclosed or legally required.
      </p>
    </section>

    <section>
      <h2>6. Data Storage and Infrastructure</h2>
      <p>PETER's storage architecture depends on the deployment configuration.</p>
      <p>
        PETER is currently primarily designed around Cloudflare-based infrastructure, which may
        include services such as Cloudflare Workers, Cloudflare Pages, Cloudflare R2, and related
        Cloudflare infrastructure.
      </p>
      <p>
        Certain deployments may also use external databases or other infrastructure depending on the
        organization's requirements.
      </p>
      <p>
        Because PETER is actively developed, the technologies and infrastructure used to operate the
        Service may change over time.
      </p>
      <p>
        The location and processing of information may therefore depend on the infrastructure
        selected for a particular deployment.
      </p>
    </section>

    <section>
      <h2>7. Third-Party Services</h2>
      <p>
        PETER may use third-party services and infrastructure providers to operate, secure, host, or
        deliver the Service.
      </p>
      <p>
        These providers may process technical information or other information necessary to provide
        their services.
      </p>
      <p>
        Third-party providers operate under their own terms and privacy policies. Their services may
        also have their own data-storage locations, retention practices, and security measures.
      </p>
      <p>
        Where appropriate, organizations should review the relevant third-party policies applicable
        to their deployment.
      </p>
    </section>

    <section>
      <h2>8. Cookies and Similar Technologies</h2>
      <p>
        The PETER website may use cookies, local storage, session storage, or similar technologies
        when necessary to operate the website, maintain sessions, remember preferences, or provide
        application functionality.
      </p>
      <p>
        The specific technologies used may vary between the public landing page, demonstration
        environment, and production deployments.
      </p>
    </section>

    <section>
      <h2>9. Data Retention</h2>
      <p>PETER does not prescribe a single retention period for all organizations.</p>
      <p>
        Attendance records and related information may be retained according to the organization's
        operational requirements, configuration, contractual arrangements, or applicable legal
        obligations.
      </p>
      <p>
        Organizations using PETER are responsible for establishing appropriate retention and
        deletion policies for the information they manage.
      </p>
      <p>
        Technical logs and other operational information may be retained for as long as reasonably
        necessary for security, troubleshooting, service operation, or legal purposes.
      </p>
    </section>

    <section>
      <h2>10. Data Security</h2>
      <p>
        PETER is developed with reasonable security practices intended to protect information
        against unauthorized access, alteration, disclosure, or destruction.
      </p>
      <p>
        However, no internet-based application or storage system can guarantee absolute security.
      </p>
      <p>
        Organizations are responsible for maintaining appropriate account security, access controls,
        device security, and operational procedures when using PETER.
      </p>
    </section>

    <section>
      <h2>11. Organization Responsibilities</h2>
      <p>
        When an organization uses PETER to process personal information, the organization may
        determine:
      </p>
      <ul>
        <li>Which individuals are entered into the system;</li>
        <li>What information is collected;</li>
        <li>How attendance information is used;</li>
        <li>Who can access attendance records;</li>
        <li>How long information is retained; and</li>
        <li>When information should be deleted.</li>
      </ul>
      <p>
        Accordingly, the organization operating PETER may have additional privacy obligations toward
        its employees, members, or other users.
      </p>
      <p>
        PETER provides technical functionality but does not replace the organization's
        responsibility to comply with applicable privacy and data-protection laws.
      </p>
    </section>

    <section>
      <h2>12. Children's Privacy</h2>
      <p>PETER is primarily intended for organizational attendance-management purposes.</p>
      <p>
        Organizations should not use PETER to process information relating to children or minors
        unless they have established an appropriate lawful basis and safeguards for doing so.
      </p>
      <p>
        If a deployment is specifically intended for minors, additional privacy and data-protection
        requirements may apply.
      </p>
    </section>

    <section>
      <h2>13. Demonstration Environment</h2>
      <p>PETER may provide a publicly accessible demonstration environment.</p>
      <p>
        The demonstration environment is intended for evaluation and demonstration purposes and
        should not be used to submit real sensitive, confidential, or personal information unless
        explicitly instructed.
      </p>
      <p>
        Data submitted to a demonstration environment may be reset, deleted, or modified as part of
        maintenance or development.
      </p>
    </section>

    <section>
      <h2>14. International and Infrastructure Limitations</h2>
      <p>
        Because PETER currently relies heavily on Cloudflare-based infrastructure and other
        internet-based services, availability and data processing may be affected by infrastructure
        availability, regional network conditions, third-party service limitations, or deployment
        restrictions.
      </p>
      <p>
        Some organizations, countries, regions, or environments may have requirements that are not
        currently supported by PETER.
      </p>
      <p>
        Organizations should evaluate whether the available PETER deployment is appropriate for
        their own regulatory, contractual, security, and operational requirements.
      </p>
    </section>

    <section>
      <h2>15. Your Rights</h2>
      <p>
        Depending on your jurisdiction and your relationship with the organization using PETER, you
        may have rights concerning your personal information. These may include rights to:
      </p>
      <ul>
        <li>Request access to personal information;</li>
        <li>Request correction of inaccurate information;</li>
        <li>Request deletion where applicable;</li>
        <li>Object to or restrict certain processing;</li>
        <li>Request information about how your data is processed; and</li>
        <li>Exercise other rights provided by applicable law.</li>
      </ul>
      <p>
        If your information is processed through an organization's PETER deployment, your first
        point of contact should generally be the organization responsible for that deployment.
      </p>
    </section>

    <section>
      <h2>16. Changes to This Privacy Policy</h2>
      <p>
        This Privacy Policy may be updated as PETER's features, infrastructure, and data practices
        evolve.
      </p>
      <p>When changes are made, the Effective Date at the top of this document will be updated.</p>
      <p>We encourage users and organizations to periodically review this Privacy Policy.</p>
    </section>

    <section>
      <h2>17. Contact</h2>
      <p>
        For questions regarding this Privacy Policy or PETER's privacy practices, please use the
        contact information provided on the official PETER website.
      </p>
    </section>
  </UPageCard>
</template>

<style scoped>
h1 {
  font-size: 1.875rem;
  font-weight: 700;
  letter-spacing: -0.02em;
  color: var(--ui-text-highlighted, #111827);
  margin-bottom: 0.25rem;
}

h1 + p {
  color: var(--ui-text-muted, #6b7280);
  font-size: 0.875rem;
  margin-bottom: 2rem;
}

hr {
  border: none;
  border-top: 1px solid var(--ui-border, #e5e7eb);
  margin: 2rem 0;
}

section {
  margin-bottom: 2.25rem;
}

section:last-of-type {
  margin-bottom: 0;
}

h2 {
  font-size: 1.125rem;
  font-weight: 600;
  color: var(--ui-text-highlighted, #111827);
  margin-bottom: 0.75rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid var(--ui-border, #e5e7eb);
}

p {
  color: var(--ui-text-toned, #374151);
  line-height: 1.7;
  margin-bottom: 0.875rem;
}

p:last-child {
  margin-bottom: 0;
}

ul {
  margin: 0.5rem 0 0.875rem 0;
  padding-left: 0;
  list-style: none;
}

li {
  position: relative;
  color: var(--ui-text-toned, #374151);
  line-height: 1.7;
  padding-left: 1.25rem;
  margin-bottom: 0.375rem;
}

li::before {
  content: "";
  position: absolute;
  left: 0;
  top: 0.7em;
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: var(--ui-primary, #10b981);
}

li:last-child {
  margin-bottom: 0;
}

strong {
  font-weight: 600;
  color: var(--ui-text-highlighted, #111827);
}

a,
:deep(a) {
  color: var(--ui-primary, #10b981);
  text-decoration: underline;
  text-decoration-color: transparent;
  transition: text-decoration-color 0.15s ease;
}

a:hover,
:deep(a:hover) {
  text-decoration-color: currentColor;
}
</style>
