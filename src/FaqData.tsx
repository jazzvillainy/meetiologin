interface FAQ {
  question: string;
  answer: string;
}

const faq: FAQ[] = [
  {
    question: "How do I schedule a meeting?",
    answer:
      "To schedule a meeting, click on the 'Schedule' button in the top navigation bar. Choose the date, time, and participants, and then click 'Create Meeting'.",
  },
  {
    question: "Can I invite people outside my organization?",
    answer:
      "Yes, you can invite external participants by entering their email addresses in the participant field when scheduling a meeting. They will receive an invitation with a link to join.",
  },
  {
    question: "How do I join a meeting?",
    answer:
      "To join a meeting, click on the meeting link in your email invitation or go to the 'Upcoming Meetings' tab in the app, and click 'Join' next to the meeting you wish to attend.",
  },
  {
    question: "What happens if I miss a meeting?",
    answer:
      "If you miss a meeting, you can view the meeting recording (if enabled) in the meeting details page or contact the meeting organizer for a summary.",
  },
  {
    question: "Can I share my screen during a meeting?",
    answer:
      "Yes, you can share your screen by clicking the 'Share Screen' button during the meeting. Select the window or application you wish to share with other participants.",
  },
  {
    question: "How do I mute or unmute myself?",
    answer:
      "You can mute or unmute yourself by clicking the microphone icon in the meeting controls. Alternatively, use the keyboard shortcut (usually 'M') to toggle mute.",
  },
  {
    question: "Is there a limit on the number of participants?",
    answer:
      "The number of participants in a meeting depends on the plan you are subscribed to. The free plan allows up to 100 participants, while premium plans can host more.",
  },
  {
    question: "How can I change my meeting time?",
    answer:
      "To change the time of your meeting, go to the meeting details page and click 'Edit'. You can adjust the date and time, then save the changes. All participants will be notified of the new schedule.",
  },
  {
    question: "Can I set up recurring meetings?",
    answer:
      "Yes, when scheduling a meeting, you can choose to make it a recurring meeting by selecting the 'Recurring' option. You can specify the frequency (daily, weekly, monthly, etc.).",
  },
  {
    question: "How do I cancel a meeting?",
    answer:
      "To cancel a meeting, go to the meeting details page and click on 'Cancel Meeting'. You will be prompted to notify all participants about the cancellation.",
  },
];

export default faq;
