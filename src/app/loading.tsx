import Image from "next/image";

export default function Loading() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="flex flex-col items-center space-y-4">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <div className="h-12 w-12 relative animate-pulse">
            <Image
              src="/images/company-logo.png"
              alt="Finex Development Logo"
              fill
              className="object-contain"
            />
          </div>
          <span className="font-bold text-2xl text-foreground">
            Finex Development
          </span>
        </div>
        
        {/* Loading spinner */}
        <div className="flex space-x-1">
          <div className="w-2 h-2 bg-primary rounded-full animate-bounce [animation-delay:-0.3s]"></div>
          <div className="w-2 h-2 bg-primary rounded-full animate-bounce [animation-delay:-0.15s]"></div>
          <div className="w-2 h-2 bg-primary rounded-full animate-bounce"></div>
        </div>
        
        <p className="text-muted-foreground text-sm">Loading...</p>
      </div>
    </div>
  );
}
