interface ApplicationCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export default function ApplicationCard({ icon, title, description }: ApplicationCardProps) {
  return (
    <div className="p-6 bg-white border border-foreground/10 rounded-lg">
      <div className="w-12 h-12 flex items-center justify-center bg-accent/10 rounded-lg text-accent mb-4">
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-foreground mb-2">
        {title}
      </h3>
      <p className="text-sm text-foreground/70">
        {description}
      </p>
    </div>
  );
}
