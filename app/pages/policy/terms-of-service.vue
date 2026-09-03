<script setup>
definePageMeta({
  layout: "policy",
});
</script>

<template>
  <UPageCard :ui="{ root: 'bg-elevated ring ring-muted shadow-lg shadow-default/5 p-7' }">
    <h1>Terms of Service</h1>
    <p><strong>Effective Date:</strong> August 31, 2026</p>

    <section>
      <p>Welcome to PETER.</p>
      <p>
        PETER is an attendance management system designed to help organizations manage employee or
        member attendance through streamlined clock-in and clock-out workflows, attendance records,
        and face-based verification.
      </p>
      <p>
        These Terms of Service ("Terms") govern your access to and use of the PETER website,
        applications, demonstrations, and related services (collectively, the "Service").
      </p>
      <p>
        By accessing or using PETER, you agree to these Terms. If you do not agree with these Terms,
        please do not use the Service.
      </p>
      <p>
        "PETER" is the name of the software system and project described in these Terms; it is not
        itself a separate legal entity. The Service is developed, owned, and operated by
        <span class="placeholder">Isaac Yancy Paala</span>, operating under the developer name
        <strong>yncynotdev</strong>. Throughout these Terms, references to "PETER," "we," "us," and
        "our" refer to <span class="placeholder">Isaac Yancy Paala</span> (yncynotdev) as the
        licensor and operator of the Service, unless the context clearly refers only to the software
        system itself.
      </p>
    </section>

    <section>
      <h2>1. About PETER</h2>
      <p>
        PETER is an actively developed software system intended to provide practical attendance
        solutions for organizations.
      </p>
      <p>
        PETER is not merely a personal or experimental project. It is designed and developed with
        the intention of serving real organizations and their attendance-management needs. Features,
        infrastructure, integrations, and supported deployment environments may continue to evolve
        as the system is developed and deployed for different organizations.
      </p>
      <p>
        PETER may be provided as a hosted service, organization-specific deployment, demonstration
        environment, or other deployment arrangement depending on the organization's requirements.
      </p>
    </section>

    <section>
      <h2>2. Payment, Deliverables, Ownership, and Maintenance</h2>
      <p>
        This section describes how payment is structured, and how deployment infrastructure,
        database, and operational control of a deployed PETER system are handled once development is
        completed for an organization. The underlying source code of the system is proprietary to
        PETER and is not distributed to any organization under either arrangement described below.
      </p>
      <h3>2.1 Down Payment</h3>
      <p>
        Upon agreement to proceed with the purchase of a system, the organization will make a
        partial down payment ranging from 50% to a maximum of 65% of the total project cost. The
        exact percentage depends on the scope of the initial iteration of the system requested by
        the organization and will be agreed upon before development begins.
      </p>
      <p>
        Specific payment schedules, remaining balances, and payment milestones may be further
        defined in a separate agreement between PETER and the organization.
      </p>
      <h3>2.2 Cancellation Policy</h3>
      <p>
        The organization may cancel the project within 3 business days (72 hours) of making the down
        payment for a full refund, provided that work on the project has not yet commenced.
      </p>
      <p>
        After this 3-business-day window has passed, or once project onboarding or development has
        started (whichever occurs first), the down payment becomes non-refundable.
      </p>
      <p>
        Regardless of cancellation, PETER remains obligated to complete and deliver all business
        requirements covered by the scope for which the down payment was made. Neither party is
        obligated to proceed to any subsequent milestones beyond that scope.
      </p>
      <h3>2.3 Full Handover</h3>
      <p>
        Once a system has been completed in accordance with the agreed scope and business
        requirements, PETER will transfer the relevant deployment infrastructure accounts (such as
        Cloudflare, Neon, Supabase, Resend, and any other services used in the deployment) and the
        database to the organization. From that point, the organization is responsible for managing
        its own billing, API keys, secrets, and hosting for the system.
      </p>
      <p>
        The underlying source code of the system remains the proprietary property of PETER and is
        not distributed to the organization as part of a full handover. The organization is granted
        a perpetual, non-exclusive license to continue operating the deployed system as delivered.
        This license does not include the right to access, copy, extract, reverse engineer, or
        modify the underlying source code.
      </p>
      <h3>2.4 Maintenance Subscription</h3>
      <p>
        If an organization instead wishes for the system to continue to be maintained by PETER,
        ongoing maintenance and support are provided under a separate, paid maintenance
        subscription.
      </p>
      <p>
        Under a maintenance subscription, the organization owns and manages its own deployment
        infrastructure accounts, billing, and secrets in the same manner as under a full handover.
        PETER is granted limited, deployment-scoped access to these accounts (such as a
        deployment-only API token) solely for the purpose of pushing maintenance updates, bug fixes,
        and new features to the organization's deployment. This access does not include, and does
        not grant PETER a right to distribute, the underlying source code, which remains solely in
        PETER's possession at all times.
      </p>
      <p>
        The organization's right to continue operating the deployed system is granted as a
        perpetual, non-exclusive license, on the same terms described in Section 2.3. This license
        survives the end or cancellation of the maintenance subscription, as the subscription fee
        covers PETER's ongoing maintenance and support only, not the organization's continued right
        to operate the system it has already been given. If the subscription ends or is cancelled,
        PETER's deployment-scoped access is revoked, and the organization retains and may continue
        operating the system as last deployed, without further updates from PETER, subject to the
        underlying intellectual property rights described in Section 10 (Intellectual Property).
      </p>
      <p>
        Specific terms regarding handover timing, maintenance scope, and subscription pricing may be
        further defined in a separate agreement between PETER and the organization.
      </p>
      <h3>2.5 Out-of-Scope Requests and Changes</h3>
      <p>
        Any request to add, modify, or remove functionality beyond the business requirements covered
        by the scope agreed upon for the down payment under Section 2.1 is considered an
        out-of-scope request. This includes both entirely new features and changes to
        already-delivered functionality.
      </p>
      <p>
        Out-of-scope requests are not included in the original project cost and will be quoted and
        charged separately, based on the complexity, size, and effort required to implement the
        request. PETER will provide the organization with an estimate for any out-of-scope request
        before beginning work on it, and work will not commence until the organization approves the
        estimate.
      </p>
      <p>
        Specific rates, quoting methods, and turnaround times for out-of-scope requests may be
        further defined in a separate agreement between PETER and the organization.
      </p>
    </section>

    <section>
      <h2>3. Use of the Service</h2>
      <p>You may use PETER only for lawful purposes and in accordance with these Terms.</p>
      <p>Organizations using PETER are responsible for:</p>
      <ul>
        <li>
          Providing accurate information necessary to configure and operate their organization;
        </li>
        <li>
          Ensuring that employees, members, or other individuals using the system are appropriately
          informed about its use;
        </li>
        <li>Obtaining any consent or authorization required by applicable laws and regulations;</li>
        <li>Maintaining the confidentiality of their account credentials;</li>
        <li>
          Ensuring that users have appropriate authorization to access attendance information; and
        </li>
        <li>
          Using attendance information responsibly and only for legitimate organizational purposes.
        </li>
      </ul>
      <p>You must not attempt to:</p>
      <ul>
        <li>Gain unauthorized access to PETER or its infrastructure;</li>
        <li>Circumvent authentication, authorization, or security mechanisms;</li>
        <li>Interfere with the operation of the Service;</li>
        <li>Introduce malicious code or intentionally disrupt the Service;</li>
        <li>Access another organization's data without authorization;</li>
        <li>Reverse engineer, abuse, or exploit the Service for malicious purposes; or</li>
        <li>Use PETER for unlawful activities.</li>
      </ul>
    </section>

    <section>
      <h2>4. Attendance and Face Verification</h2>
      <p>
        PETER may use a camera and face-detection technology as part of its attendance workflow.
      </p>
      <p>
        Face detection is intended to assist with attendance verification and reduce practices such
        as buddy-punching. PETER is designed around the principle that biometric data should not be
        unnecessarily retained.
      </p>
      <p>
        However, organizations are responsible for determining whether their particular use of
        face-based attendance verification complies with applicable privacy, employment,
        data-protection, and other laws.
      </p>
      <p>
        PETER should not be treated as a replacement for an organization's legal, human-resources,
        or compliance processes.
      </p>
    </section>

    <section>
      <h2>5. Accuracy and Reliability</h2>
      <p>
        PETER is intended to provide a convenient and reliable attendance-management system.
        However, no software system can guarantee perfect accuracy or uninterrupted availability.
      </p>
      <p>Attendance verification may be affected by factors including:</p>
      <ul>
        <li>Camera quality;</li>
        <li>Lighting conditions;</li>
        <li>Device hardware;</li>
        <li>Network connectivity;</li>
        <li>Browser compatibility;</li>
        <li>Environmental conditions;</li>
        <li>Face positioning or visibility;</li>
        <li>Server or infrastructure availability; and</li>
        <li>Other technical limitations.</li>
      </ul>
      <p>
        Organizations should maintain appropriate procedures for handling failed or disputed
        attendance records.
      </p>
      <p>
        PETER does not guarantee that every attendance attempt will be successfully detected,
        verified, recorded, or synchronized.
      </p>
    </section>

    <section>
      <h2>6. Service Availability and Infrastructure Limitations</h2>
      <p>
        PETER's infrastructure and deployment capabilities may vary depending on the deployment
        configuration used by an organization.
      </p>
      <p>
        At present, PETER is primarily designed around Cloudflare-based infrastructure and services.
        This may include Cloudflare Workers, Cloudflare Pages, Cloudflare R2, Cloudflare networking,
        and other Cloudflare services.
      </p>
      <p>
        As a result, certain deployment environments, hosting configurations, geographic regions,
        network conditions, integrations, or organizational requirements may not currently be
        supported.
      </p>
      <p>
        The availability of particular features may therefore depend on the infrastructure available
        to the organization.
      </p>
      <p>
        PETER may also experience temporary interruptions caused by maintenance, infrastructure
        failures, network problems, third-party service outages, deployment changes, or
        circumstances beyond our reasonable control.
      </p>
      <p>
        We may change, improve, replace, or discontinue portions of the Service as PETER continues
        to develop.
      </p>
    </section>

    <section>
      <h2>7. Third-Party Services</h2>
      <p>
        PETER may rely on third-party infrastructure, hosting providers, software libraries, APIs,
        and other services.
      </p>
      <p>
        These third-party services may have their own terms, policies, limitations, availability
        requirements, and privacy practices.
      </p>
      <p>
        PETER is not responsible for failures or changes to third-party services outside of our
        reasonable control.
      </p>
    </section>

    <section>
      <h2>8. Demonstration Environment</h2>
      <p>
        PETER may provide a publicly accessible demonstration environment for evaluation and
        informational purposes.
      </p>
      <p>
        The demonstration environment is intended to showcase the capabilities and general workflow
        of PETER. It may not represent the exact configuration, security controls, integrations,
        performance characteristics, or functionality of an organization's production deployment.
      </p>
      <p>
        Demonstration environments may be reset, modified, restricted, or discontinued without
        notice.
      </p>
      <p>
        Users should not submit sensitive, confidential, or production information to a public
        demonstration environment unless explicitly instructed to do so.
      </p>
    </section>

    <section>
      <h2>9. Pricing and Commercial Terms</h2>
      <p>
        PETER may be offered under different pricing models depending on the organization's
        requirements, deployment environment, number of users, features, infrastructure
        requirements, support arrangements, and other factors.
      </p>
      <p>Prices are subject to change and may vary between organizations or deployments.</p>
      <p>
        Down payments and maintenance subscription fees, where applicable, are governed by Section 2
        (Payment, Deliverables, Ownership, and Maintenance) and any separate agreement.
      </p>
      <p>
        Any pricing displayed on the PETER website is informational unless explicitly identified as
        a binding commercial offer.
      </p>
      <p>
        Additional costs may apply for customized development, deployment, infrastructure,
        integrations, maintenance, support, or other services.
      </p>
      <p>
        Specific commercial arrangements may be governed by a separate agreement between PETER and
        the organization.
      </p>
    </section>

    <section>
      <h2>10. Intellectual Property</h2>
      <p>
        PETER, including its software, source code, design, branding, documentation, visual
        elements, and associated materials, is owned by or licensed to the PETER project and its
        respective rights holders. The underlying source code is not distributed to any organization
        under a full handover or a maintenance subscription, and ownership of it is not transferred
        by these Terms.
      </p>
      <p>
        Under either a full handover or a maintenance subscription, as described in Section 2
        (Payment, Deliverables, Ownership, and Maintenance), the organization is granted a
        perpetual, non-exclusive license to continue operating its deployed instance of the system.
        This license does not include the right to access, copy, extract, reverse engineer, or
        modify the underlying source code, and does not transfer ownership of PETER's intellectual
        property.
      </p>
      <p>
        You may not copy, redistribute, modify, sell, or commercially exploit PETER or its materials
        except where expressly permitted by applicable law or a separate written agreement.
      </p>
      <p>
        Organizations retain ownership of the data they provide to PETER, subject to the rights and
        licenses necessary to operate the Service.
      </p>
    </section>

    <section>
      <h2>11. User and Organization Data</h2>
      <p>Organizations remain responsible for the data they submit to or manage through PETER.</p>
      <p>
        Organizations are responsible for ensuring that their collection and processing of
        attendance, employee, member, or other personal information complies with applicable laws
        and regulations.
      </p>
      <p>
        For information about how PETER handles personal information, please refer to the
        <router-link to="/privacy">Privacy Policy</router-link>.
      </p>
    </section>

    <section>
      <h2>12. Disclaimer</h2>
      <p>
        PETER is provided on an "as is" and "as available" basis to the extent permitted by
        applicable law.
      </p>
      <p>We do not guarantee that:</p>
      <ul>
        <li>The Service will always be available;</li>
        <li>The Service will be free from errors or interruptions;</li>
        <li>Attendance verification will always be accurate;</li>
        <li>The Service will work with every device or environment;</li>
        <li>The Service will satisfy every organization's particular requirements; or</li>
        <li>The Service will remain unchanged or continuously support every feature.</li>
      </ul>
      <p>
        Organizations should maintain appropriate backup, attendance-review, and operational
        procedures appropriate to their needs.
      </p>
    </section>

    <section>
      <h2>13. Limitation of Liability</h2>
      <p>
        To the maximum extent permitted by applicable law, PETER and its developers shall not be
        liable for indirect, incidental, consequential, special, or other damages resulting from the
        use or inability to use the Service.
      </p>
      <p>
        This may include losses resulting from service interruptions, inaccurate attendance records,
        infrastructure failures, third-party service failures, unauthorized access, or other
        circumstances outside our reasonable control.
      </p>
      <p>
        Nothing in these Terms is intended to exclude liability that cannot legally be excluded
        under applicable law.
      </p>
    </section>

    <section>
      <h2>14. Changes to These Terms</h2>
      <p>These Terms may be updated from time to time as PETER evolves.</p>
      <p>
        When changes are made, the Effective Date at the top of this document will be updated.
        Continued use of the Service after changes become effective constitutes acceptance of the
        revised Terms to the extent permitted by law.
      </p>
    </section>

    <section>
      <h2>15. Contact</h2>
      <p>
        If you have questions about these Terms, PETER, its services, or a particular deployment,
        please contact the PETER project through the contact information provided on the official
        PETER website.
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

h3 {
  font-size: 0.9375rem;
  font-weight: 600;
  color: var(--ui-text-highlighted, #111827);
  margin: 1.25rem 0 0.5rem 0;
}

h3:first-of-type {
  margin-top: 0.5rem;
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
