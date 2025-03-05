export const baseImagePath: string = '/assets/images'

export const servicesData = [
  {
    id: "card-1-content",
    title: "Seamless Credential Issuance & Verification",
    description:
      "Issue, verify, and manage verifiable credentials seamlessly using the latest decentralized identity standards.",
    imgSrc: `${baseImagePath}/issuance_verification_icon.svg`,
    altText: "Issuance & Verification Icon",
  },
  {
    id: "card-2-content",
    title: "Comprehensive Ecosystem",
    description:
      "Easily connect Sovio to multiple identity providers, DIDs method, and protocols to create an ecosystem that works seamlessly together.",
    imgSrc: `${baseImagePath}/comprehensive_ecosystem_icon.svg`,
    altText: "Ecosystem Icon",
  },
  {
    id: "card-3-content",
    title: "Reusable ID",
    description:
      "Simplify credential management with reusable identities that work across multiple use cases.",
    imgSrc: `${baseImagePath}/privacy_icon.svg`,
    altText: "Reusable ID Icon",
  },
  {
    id: "card-4-content",
    title: "Effortless Integration",
    description:
      "Integrate Sovio into your system with intuitive APIs and SDKs.",
    imgSrc: `${baseImagePath}/privacy_icon.svg`,
    altText: "Integration Icon",
  },
  {
    id: "card-5-content",
    title: "Wide Wallet Compatibility",
    description:
      "Benefit from broad wallet support, enabling smooth integration with other wallet providers.",
    imgSrc: `${baseImagePath}/wide_wallet_icon.svg`,
    altText: "Wallet Compatibility Icon",
  },
  {
    id: "card-6-content",
    title: "Privacy-by-design",
    description:
      "Designed with user privacy at its core, Sovio ensures that personal data remains protected.",
    imgSrc: `${baseImagePath}/privacy_icon.svg`,
    altText: "Privacy Icon",
  },
];

export const questionAnswerArray = [
  {
    question: 'How Much Does Sovio Cost?',
    answer:
      'Sovio offers a range of pricing plans to suit businesses of all sizes. Our pricing is flexible and depends on the scale of your implementation, the features you require, and the number of users. You can start for free to explore our core features and determine how Sovio fits into your organization\'s needs. For more detailed pricing information or a custom quote, please contact our sales team.',
  },
  {
    question: 'How Quickly Can Sovio Be Integrated into My System?',
    answer:
      'Sovio is designed for seamless integration with your existing systems. Depending on your infrastructure and requirements, integration can typically be completed within a few weeks. We provide intuitive APIs, SDKs, and comprehensive documentation to make the process as smooth as possible. Our support team is also available to assist you throughout the integration process.',
  },
  {
    question: 'Is Sovio Regulatory Compliant?',
    answer:
      'Yes, Sovio is designed to support DPDP (Data Protection and Privacy Regulations) and other evolving privacy regulations. We prioritize user privacy and data protection, ensuring that all personal data is handled securely and transparently. Sovio allows you to manage digital credentials in compliance with the latest regulations, offering users full control over their data, including the ability to selectively share information as needed.',
  },
  {
    question: 'How Do I Start Issuing Verifiable Credentials with Sovio?',
    answer:
      'Issuing verifiable credentials with Sovio is straightforward. Once you\'ve integrated Sovio into your system, you can start creating credentials using our user-friendly schema templates. Simply define the type of credential, set the attributes you want to include, and issue it to your users. Sovio supports multiple formats like JSON-LD, JWT, and AnonCreds, giving you flexibility in credential creation and management. For more detailed guidance, check out our step-by-step documentation or request a demo with our team.',
  },
  {
    question: 'Can Sovio Be Used for Multiple Use Cases?',
    answer:
      'Yes, Sovio is highly flexible and can be used across a wide range of industries and use cases. Whether you\'re managing digital identities for education, national digital identity programs, government services, healthcare, travel credentials, or data privacy, Sovio\'s decentralized identity solutions can be tailored to meet your specific needs. Its robust and scalable architecture ensures that Sovio can support diverse applications and securely manage credentials across various sectors.',
  },
  {
    question: 'What is a Verifiable Credential (VC)?',
    answer:
      'A Verifiable Credential (VC) is a digital statement made by the issuer about a subject (person, organization, etc.) that can be cryptographically verified. These credentials provide a secure, tamper-evident way to exchange verified information across systems. VCs are based on open standards such as W3C\'s Decentralized Identifiers (DIDs) and Verifiable Credentials, ensuring interoperability and trust.',
  },
  {
    question: 'What is a DID (Decentralized Identifier)?',
    answer:
      'A Decentralized Identifier (DID) is a new type of identifier that enables self-sovereign identity. Unlike traditional identifiers (like emails or usernames), DIDs are fully under the control of the subject (person, organization, etc.), without relying on centralized registries or authorities. DIDs are designed to be private, secure, and verifiable, and they serve as the foundation for decentralized identity systems.',
  },
  {
    question: 'Can Sovio Be Integrated with Other Identity Providers or Platforms?',
    answer: `Yes, Sovio is designed to integrate with a wide variety of identity providers, decentralized identifiers (DIDs), and protocols. Whether you're working with other SSI platforms, traditional identity management systems, or third-party services, Sovio’s flexible API and SDKs allow for easy integration. This ensures you can build a comprehensive identity ecosystem that meets your organization's needs.`
  }
];

export const ResponseMessages: { [key: string]: string } = {
  success: "Thank you for subscribing!",
  failed: "Failed to subscribe.",
};


export const StatusCode = {
  Accepted: 202
};