interface Faq {
  question: string;
  answer: string;
}

export const faqs: Faq[] = [
  {
    question: "How do I schedule a meeting?",
    answer:
      "To schedule a meeting, simply click on the 'Schedule' button in the app, choose a date and time, and send the invitation link to your participants.",
  },
  {
    question: "Can I host a meeting without an account?",
    answer:
      "No, you need to create an account to host a meeting. However, you can join meetings without an account using a meeting link.",
  },
  {
    question: "How can I share my screen during a meeting?",
    answer:
      "During the meeting, click on the 'Share Screen' button at the bottom of the screen. You can choose to share your entire desktop or just a specific application window.",
  },
  {
    question: "Is there a time limit for meetings?",
    answer:
      "For free accounts, meetings are limited to 40 minutes. Premium accounts offer unlimited meeting durations.",
  },
  {
    question: "Can I record a meeting?",
    answer:
      "Yes, you can record meetings if you are the host or if the host has given you permission. Recordings are saved to the cloud or your device, depending on your settings.",
  },
  {
    question: "How do I invite participants to a meeting?",
    answer:
      "Once your meeting is scheduled or started, you can invite participants by sending them the meeting link or by sharing the invitation via email or calendar.",
  },
  {
    question: "How do I mute or unmute myself?",
    answer:
      "Click the microphone icon in the toolbar to mute or unmute yourself. You can also use keyboard shortcuts to mute/unmute quickly.",
  },
  {
    question: "Can I change my background during a meeting?",
    answer:
      "Yes, you can change your background by clicking the 'Virtual Background' option in the settings menu before or during the meeting.",
  },
  {
    question: "How can I remove or block someone from my meeting?",
    answer:
      "As the host, you can remove or block participants by clicking on their name in the participant list and selecting 'Remove' or 'Block'.",
  },
  {
    question: "What happens if I lose my internet connection during a meeting?",
    answer:
      "If you lose your connection, the app will try to reconnect automatically. If reconnection fails, you can rejoin the meeting using the original link once your internet connection is restored.",
  },
];
