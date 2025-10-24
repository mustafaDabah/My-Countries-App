interface TitleProps {
    title: string
    description: string
}

function Title({ title, description }: TitleProps) {
    return (
        <div className="mb-8 animate-fade-in pt-10">
            <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
               {title} 
            </h1>
            <p className="text-muted-foreground text-lg">
               {description}
            </p>
        </div>
    )
}

export default Title