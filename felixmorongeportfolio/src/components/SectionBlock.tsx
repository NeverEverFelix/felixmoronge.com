type Props = {
    title: string;
  };
  
  export default function SectionBlock({ title }: Props) {
    return (
      <div className="w-full max-w-3xl text-center">
        <h2 className="text-4xl font-semibold mb-6">{title}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Replace with real cards per section */}
          <div className="bg-gray-300 h-40 rounded-lg" />
          <div className="bg-gray-300 h-40 rounded-lg" />
          <div className="bg-gray-300 h-40 rounded-lg" />
        </div>
      </div>
    );
  }
  