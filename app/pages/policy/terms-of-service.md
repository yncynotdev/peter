# Terms of Service

**Effective Date:** August 31, 2026

Welcome to PETER.

PETER is an attendance management system designed to help organizations manage employee or member attendance through streamlined clock-in and clock-out workflows, attendance records, and face-based verification.

These Terms of Service ("Terms") govern your access to and use of the PETER website, applications, demonstrations, and related services (collectively, the "Service").

By accessing or using PETER, you agree to these Terms. If you do not agree with these Terms, please do not use the Service.

"PETER" is the name of the software system and project described in these Terms; it is not itself a separate legal entity. The Service is developed, owned, and operated by **Isaac Yancy Paala**, operating under the developer name **yncynotdev**. Throughout these Terms, references to "PETER," "we," "us," and "our" refer to **Isaac Yancy Paala (yncynotdev)** as the licensor and operator of the Service, unless the context clearly refers only to the software system itself.

---

## 1. About PETER

PETER is an actively developed software system intended to provide practical attendance solutions for organizations.

PETER is not merely a personal or experimental project. It is designed and developed with the intention of serving real organizations and their attendance-management needs. Features, infrastructure, integrations, and supported deployment environments may continue to evolve as the system is developed and deployed for different organizations.

PETER may be provided as a hosted service, organization-specific deployment, demonstration environment, or other deployment arrangement depending on the organization's requirements.

## 2. Payment, Deliverables, Ownership, and Maintenance

This section describes how payment is structured, and how deployment infrastructure, database, and operational control of a deployed PETER system are handled once development is completed for an organization. The underlying source code of the system is proprietary to PETER and is not distributed to any organization under either arrangement described below.

### 2.1 Down Payment

Upon agreement to proceed with the purchase of a system, the organization will make a partial down payment ranging from 50% to a maximum of 65% of the total project cost. The exact percentage depends on the scope of the initial iteration of the system requested by the organization and will be agreed upon before development begins.

Specific payment schedules, remaining balances, and payment milestones may be further defined in a separate agreement between PETER and the organization.

### 2.2 Cancellation Policy

The organization may cancel the project within 3 business days (72 hours) of making the down payment for a full refund, provided that work on the project has not yet commenced.

After this 3-business-day window has passed, or once project onboarding or development has started (whichever occurs first), the down payment becomes non-refundable.

Regardless of cancellation, PETER remains obligated to complete and deliver all business requirements covered by the scope for which the down payment was made. Neither party is obligated to proceed to any subsequent milestones beyond that scope.

### 2.3 Full Handover

Once a system has been completed in accordance with the agreed scope and business requirements, PETER will transfer the relevant deployment infrastructure accounts (such as Cloudflare, Neon, Supabase, Resend, and any other services used in the deployment) and the database to the organization. From that point, the organization is responsible for managing its own billing, API keys, secrets, and hosting for the system.

The underlying source code of the system remains the proprietary property of PETER and is not distributed to the organization as part of a full handover. The organization is granted a perpetual, non-exclusive license to continue operating the deployed system as delivered.

This license does not include the right to access, copy, extract, reverse engineer, or modify the underlying source code.

### 2.4 Maintenance Subscription

If an organization instead wishes for the system to continue to be maintained by PETER, ongoing maintenance and support are provided under a separate, paid maintenance subscription.

Under a maintenance subscription, the organization owns and manages its own deployment infrastructure accounts, billing, and secrets in the same manner as under a full handover.

PETER is granted limited, deployment-scoped access to these accounts (such as a deployment-only API token) solely for the purpose of pushing maintenance updates, bug fixes, and new features to the organization's deployment. This access does not include, and does not grant PETER a right to distribute, the underlying source code, which remains solely in PETER's possession at all times.

The organization's right to continue operating the deployed system is granted as a perpetual, non-exclusive license, on the same terms described in Section 2.3.

This license survives the end or cancellation of the maintenance subscription, as the subscription fee covers PETER's ongoing maintenance and support only, not the organization's continued right to operate the system it has already been given.

If the subscription ends or is cancelled, PETER's deployment-scoped access is revoked, and the organization retains and may continue operating the system as last deployed, without further updates from PETER, subject to the underlying intellectual property rights described in [Section 10 (Intellectual Property)](#10-intellectual-property).

Specific terms regarding handover timing, maintenance scope, and subscription pricing may be further defined in a separate agreement between PETER and the organization.

### 2.5 Out-of-Scope Requests and Changes

Any request to add, modify, or remove functionality beyond the business requirements covered by the scope agreed upon for the down payment under Section 2.1 is considered an out-of-scope request. This includes both entirely new features and changes to already-delivered functionality.

Out-of-scope requests are not included in the original project cost and will be quoted and charged separately, based on the complexity, size, and effort required to implement the request.

PETER will provide the organization with an estimate for any out-of-scope request before beginning work on it, and work will not commence until the organization approves the estimate.

Specific rates, quoting methods, and turnaround times for out-of-scope requests may be further defined in a separate agreement between PETER and the organization.

## 3. Use of the Service

You may use PETER only for lawful purposes and in accordance with these Terms.

Organizations using PETER are responsible for:

* Providing accurate information necessary to configure and operate their organization;
* Ensuring that employees, members, or other individuals using the system are appropriately informed about its use;
* Obtaining any consent or authorization required by applicable laws and regulations;
* Maintaining the confidentiality of their account credentials;
* Ensuring that users have appropriate authorization to access attendance information; and
* Using attendance information responsibly and only for legitimate organizational purposes.

You must not attempt to:

* Gain unauthorized access to PETER or its infrastructure;
* Circumvent authentication, authorization, or security mechanisms;
* Interfere with the operation of the Service;
* Introduce malicious code or intentionally disrupt the Service;
* Access another organization's data without authorization;
* Reverse engineer, abuse, or exploit the Service for malicious purposes; or
* Use PETER for unlawful activities.

## 4. Attendance and Face Verification

PETER may use a camera and face-detection technology as part of its attendance workflow.

Face detection is intended to assist with attendance verification and reduce practices such as buddy-punching. PETER is designed around the principle that biometric data should not be unnecessarily retained.

However, organizations are responsible for determining whether their particular use of face-based attendance verification complies with applicable privacy, employment, data-protection, and other laws.

PETER should not be treated as a replacement for an organization's legal, human-resources, or compliance processes.

## 5. Accuracy and Reliability

PETER is intended to provide a convenient and reliable attendance-management system. However, no software system can guarantee perfect accuracy or uninterrupted availability.

Attendance verification may be affected by factors including:

* Camera quality;
* Lighting conditions;
* Device hardware;
* Network connectivity;
* Browser compatibility;
* Environmental conditions;
* Face positioning or visibility;
* Server or infrastructure availability; and
* Other technical limitations.

Organizations should maintain appropriate procedures for handling failed or disputed attendance records.

PETER does not guarantee that every attendance attempt will be successfully detected, verified, recorded, or synchronized.

## 6. Service Availability and Infrastructure Limitations

PETER's infrastructure and deployment capabilities may vary depending on the deployment configuration used by an organization.

At present, PETER is primarily designed around Cloudflare-based infrastructure and services. This may include Cloudflare Workers, Cloudflare Pages, Cloudflare R2, Cloudflare networking, and other Cloudflare services.

As a result, certain deployment environments, hosting configurations, geographic regions, network conditions, integrations, or organizational requirements may not currently be supported.

The availability of particular features may therefore depend on the infrastructure available to the organization.

PETER may also experience temporary interruptions caused by maintenance, infrastructure failures, network problems, third-party service outages, deployment changes, or circumstances beyond our reasonable control.

We may change, improve, replace, or discontinue portions of the Service as PETER continues to develop.

## 7. Third-Party Services

PETER may rely on third-party infrastructure, hosting providers, software libraries, APIs, and other services.

These third-party services may have their own terms, policies, limitations, availability requirements, and privacy practices.

PETER is not responsible for failures or changes to third-party services outside of our reasonable control.

## 8. Demonstration Environment

PETER may provide a publicly accessible demonstration environment for evaluation and informational purposes.

The demonstration environment is intended to showcase the capabilities and general workflow of PETER. It may not represent the exact configuration, security controls, integrations, performance characteristics, or functionality of an organization's production deployment.

Demonstration environments may be reset, modified, restricted, or discontinued without notice.

Users should not submit sensitive, confidential, or production information to a public demonstration environment unless explicitly instructed to do so.

## 9. Pricing and Commercial Terms

PETER may be offered under different pricing models depending on the organization's requirements, deployment environment, number of users, features, infrastructure requirements, support arrangements, and other factors.

Prices are subject to change and may vary between organizations or deployments.

Down payments and maintenance subscription fees, where applicable, are governed by Section 2 (Payment, Deliverables, Ownership, and Maintenance) and any separate agreement.

Any pricing displayed on the PETER website is informational unless explicitly identified as a binding commercial offer.

Additional costs may apply for customized development, deployment, infrastructure, integrations, maintenance, support, or other services.

Specific commercial arrangements may be governed by a separate agreement between PETER and the organization.

## 10. Intellectual Property

PETER, including its software, source code, design, branding, documentation, visual elements, and associated materials, is owned by or licensed to the PETER project and its respective rights holders.

The underlying source code is not distributed to any organization under a full handover or a maintenance subscription, and ownership of it is not transferred by these Terms.

Under either a full handover or a maintenance subscription, as described in Section 2 (Payment, Deliverables, Ownership, and Maintenance), the organization is granted a perpetual, non-exclusive license to continue operating its deployed instance of the system.

This license does not include the right to access, copy, extract, reverse engineer, or modify the underlying source code, and does not transfer ownership of PETER's intellectual property.

You may not copy, redistribute, modify, sell, or commercially exploit PETER or its materials except where expressly permitted by applicable law or a separate written agreement.

Organizations retain ownership of the data they provide to PETER, subject to the rights and licenses necessary to operate the Service.

## 11. User and Organization Data

Organizations remain responsible for the data they submit to or manage through PETER.

Organizations are responsible for ensuring that their collection and processing of attendance, employee, member, or other personal information complies with applicable laws and regulations.

For information about how PETER handles personal information, please refer to the [Privacy Policy](/privacy).

## 12. Disclaimer

PETER is provided on an "as is" and "as available" basis to the extent permitted by applicable law.

We do not guarantee that:

* The Service will always be available;
* The Service will be free from errors or interruptions;
* Attendance verification will always be accurate;
* The Service will work with every device or environment;
* The Service will satisfy every organization's particular requirements; or
* The Service will remain unchanged or continuously support every feature.

Organizations should maintain appropriate backup, attendance-review, and operational procedures appropriate to their needs.

## 13. Limitation of Liability

To the maximum extent permitted by applicable law, PETER and its developers shall not be liable for indirect, incidental, consequential, special, or other damages resulting from the use or inability to use the Service.

This may include losses resulting from service interruptions, inaccurate attendance records, infrastructure failures, third-party service failures, unauthorized access, or other circumstances outside our reasonable control.

Nothing in these Terms is intended to exclude liability that cannot legally be excluded under applicable law.

## 14. Changes to These Terms

These Terms may be updated from time to time as PETER evolves.

When changes are made, the Effective Date at the top of this document will be updated.

Continued use of the Service after changes become effective constitutes acceptance of the revised Terms to the extent permitted by law.

## 15. Contact

If you have questions about these Terms, PETER, its services, or a particular deployment, please contact the PETER project through the contact information provided on the official PETER website.
