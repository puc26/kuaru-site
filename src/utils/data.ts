import visibilityDilemma from "../assets/images/visibility-dilemma.jpg";
import engagementGap from "../assets/images/engagement-gap.jpg";
import resultsInHibernation from "../assets/images/results-in-hibernation.jpg";

const brands = [
  {
    title: "Precision Targeting",
    features: [
      "Advanced Audience Segmentation",
      "Data-Driven Insights",
      "Personalized Content Creation",
    ],
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" stroke-width="1.5" fill="currentColor" class="w-6 h-6"><path d="M256 0c17.7 0 32 14.3 32 32V42.4c93.7 13.9 167.7 88 181.6 181.6H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H469.6c-13.9 93.7-88 167.7-181.6 181.6V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V469.6C130.3 455.7 56.3 381.7 42.4 288H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H42.4C56.3 130.3 130.3 56.3 224 42.4V32c0-17.7 14.3-32 32-32zM107.4 288c12.5 58.3 58.4 104.1 116.6 116.6V384c0-17.7 14.3-32 32-32s32 14.3 32 32v20.6c58.3-12.5 104.1-58.4 116.6-116.6H384c-17.7 0-32-14.3-32-32s14.3-32 32-32h20.6C392.1 165.7 346.3 119.9 288 107.4V128c0 17.7-14.3 32-32 32s-32-14.3-32-32V107.4C165.7 119.9 119.9 165.7 107.4 224H128c17.7 0 32 14.3 32 32s-14.3 32-32 32H107.4zM256 224a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/></svg>`,
  },
  {
    title: "Captivating Content",
    features: [
      "Creative Storytelling",
      "Compelling Visuals",
      "Interactive Media",
    ],
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" stroke-width="1.5" fill="currentColor" class="w-6 h-6"><path d="M0 80v48c0 17.7 14.3 32 32 32H48 96V80c0-26.5-21.5-48-48-48S0 53.5 0 80zM112 32c10 13.4 16 30 16 48V384c0 35.3 28.7 64 64 64s64-28.7 64-64v-5.3c0-32.4 26.3-58.7 58.7-58.7H480V128c0-53-43-96-96-96H112zM464 480c61.9 0 112-50.1 112-112c0-8.8-7.2-16-16-16H314.7c-14.7 0-26.7 11.9-26.7 26.7V384c0 53-43 96-96 96H368h96z"/></svg>`,
  },
  {
    title: "Tangible Outcomes",
    features: [
      "Comprehensive Analytics",
      "Goal Tracking",
      "Conversion Optimization",
    ],
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" stroke-width="1.5" fill="currentColor" class="w-6 h-6"><path d="M64 64c0-17.7-14.3-32-32-32S0 46.3 0 64V400c0 44.2 35.8 80 80 80H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H80c-8.8 0-16-7.2-16-16V64zm406.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L320 210.7l-57.4-57.4c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L240 221.3l57.4 57.4c12.5 12.5 32.8 12.5 45.3 0l128-128z"/></svg>`,
  },
];

const philosophy = [
  {
    title: "Visibility Dilemma",
    painPoint:
      "Your brand is drowning in the vast sea of social media, struggling to be seen by your target audience.",
    agitatepainPoint:
      "It's disheartening when your carefully crafted content goes unnoticed. Your potential customers are out there, but they simply can't find you amidst the digital noise.",
    solution:
      "Our targeted visibility strategies cut through the clutter, ensuring your brand is not just seen but remembered. Watch our video to see how we make your presence impossible to ignore.",
    img: visibilityDilemma,
  },
  {
    title: "Engagement Gap",
    painPoint:
      "Despite your efforts, audience engagement remains lackluster, and interactions are not translating into meaningful connections.",
    agitatepainPoint:
      "It's frustrating to see competitors effortlessly engaging their audience while your brand struggles to spark conversations. Your content deserves better results, and we have the solution.",
    solution:
      "Our proven engagement tactics ignite conversations, turning passive viewers into active participants. Explore how we bridge the engagement gap in our video walkthrough.",
    img: engagementGap,
  },
  {
    title: "Results in Hibernation",
    painPoint:
      "Your social media efforts aren't translating into tangible results, leaving you wondering if your investment is paying off.",
    agitatepainPoint:
      "It's disheartening when the metrics show little growth or impact. Your time and resources are valuable, and it's time to break free from the cycle of stagnant results.",
    solution:
      "Our data-driven approach ensures every action is purposeful, yielding measurable results. Dive into our video guide to witness how we turn social media activities into a powerful engine for your brand's success.",
    img: resultsInHibernation,
  },
];

export { brands, philosophy };
