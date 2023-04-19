interface HeadingProps {
    title: string;
    subtitle?: string;
  }
  
  export default function Heading(props: HeadingProps) {
    return (
      <div class="text-center space-y-4">
        <h2 class="font-bold md:text-6xl text-4xl text-primary">
          {props.title}
        </h2>
        <p class="text-xl text-black">
          {props.subtitle}
        </p>
      </div>
    );
  }