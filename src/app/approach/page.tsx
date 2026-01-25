import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Our Approach | Gigabox Research',
  description: 'The principles that guide our research into AI agents for human expertise.',
};

const principles = [
  {
    number: '01',
    title: 'Human-Centered Design',
    description: 'Every system we build starts with deep understanding of human needs. We study how people form relationships, learn from experts, and seek support. Our AI agents are designed to complement human capabilities, not replace human connection.',
  },
  {
    number: '02',
    title: 'Meaningful Memory',
    description: 'True expertise requires context. Our agents maintain rich, persistent memory of interactions, enabling them to build upon past conversations, remember preferences, and develop genuine understanding of each user over time.',
  },
  {
    number: '03',
    title: 'Proactive Value',
    description: 'The best mentors and companions don\'t just respond—they anticipate needs and reach out at the right moments. Our agents initiate meaningful interactions while carefully respecting boundaries and preferences.',
  },
  {
    number: '04',
    title: 'Ethical Foundations',
    description: 'We approach AI development with deep consideration of its societal implications. Our research examines questions of dependency, authenticity, and the nature of AI relationships, ensuring our technology serves human flourishing.',
  },
  {
    number: '05',
    title: 'Rigorous Evaluation',
    description: 'Claims require evidence. We develop comprehensive evaluation frameworks to measure the real-world impact of our systems on user wellbeing, engagement, and outcomes. Our work is grounded in measurable results.',
  },
];

export default function ApproachPage() {
  return (
    <main className="bg-background min-h-screen">
      <Header />
      <div className="pt-24 pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Approach
          </h1>
          <p className="text-lg text-foreground/70 max-w-3xl mb-16">
            We believe AI agents can democratize access to expert knowledge and meaningful support. These principles guide how we pursue that vision.
          </p>

          <div className="space-y-12">
            {principles.map((principle) => (
              <div key={principle.number} className="flex gap-8">
                <div className="text-4xl font-bold text-accent/20 shrink-0">
                  {principle.number}
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-foreground mb-3">
                    {principle.title}
                  </h2>
                  <p className="text-foreground/70 max-w-2xl">
                    {principle.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
