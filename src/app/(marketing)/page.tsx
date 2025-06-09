"use client"

import { AnimationContainer, MaxWidthWrapper, PricingCards } from "@/components";
import { BentoCard, BentoGrid, CARDS } from "@/components/ui/bento-grid";
import { BorderBeam } from "@/components/ui/border-beam";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { FloatingDockDemo } from "@/components/ui/floating-dock";
import { LampContainer } from "@/components/ui/lamp";
import MagicBadge from "@/components/ui/magic-badge";
import MagicCard from "@/components/ui/magic-card";
import { COMPANIES, PROCESS } from "@/utils";
import { REVIEWS } from "@/utils/constants/misc";
import { ArrowRightIcon, CreditCardIcon, SquareDashedMousePointer, StarIcon, Triangle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const HomePage = () => {
    return (
        <div className="overflow-x-hidden scrollbar-hide size-full">
            {/* Hero Section */}
            <MaxWidthWrapper>
                <div className="flex flex-col items-center justify-center w-full text-center bg-gradient-to-t from-background">
                    <AnimationContainer className="flex flex-col items-center justify-center w-full text-center">
                        <button className="group relative grid overflow-hidden rounded-full px-4 py-1 shadow-[0_1000px_0_0_hsl(0_0%_20%)_inset] transition-colors duration-200">
                            <span className="spark mask-gradient absolute inset-0 h-[100%] w-[100%] animate-flip overflow-hidden rounded-full [mask:linear-gradient(white,_transparent_50%)] before:absolute before:aspect-square before:w-[200%] before:rotate-[-90deg] before:animate-rotate before:bg-[conic-gradient(from_0deg,transparent_0_340deg,white_360deg)] before:content-[''] before:[inset:0_auto_auto_50%] before:[translate:-50%_-15%]" />
                            <span className="backdrop absolute inset-[1px] rounded-full bg-neutral-950 group-hover:bg-neutral-900" />
                            <span className="h-full w-full blur-md absolute bottom-0 inset-x-0 bg-gradient-to-tr from-primary/20"></span>
                            <span className="z-10 py-0.5 text-sm text-neutral-100 flex items-center justify-center gap-1">
                                Troika-Hub is now Live!
                                <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
                            </span>
                        </button>

                        <h1 className="text-foreground text-center py-6 text-5xl font-medium tracking-normal text-balance sm:text-6xl md:text-7xl lg:text-8xl !leading-[1.15] w-full font-heading">
                            Where Innovation Meets{" "}
                            <span className="text-transparent bg-gradient-to-r from-violet-500 to-fuchsia-500 bg-clip-text inline-bloc">
                                Vision
                            </span>
                        </h1>
                        <p className="mb-12 text-lg tracking-tight text-muted-foreground md:text-xl text-balance">
                            Seamlessly blend design, technology, and imagination in one place.
                            <br className="hidden md:block" />
                            <span className="hidden md:block">Crafting digital experiences that resonate, inspire, and endure.</span>
                        </p>
                        <div className="flex items-center justify-center whitespace-nowrap gap-4 z-50">
                            <Button asChild>
                                <Link href="/auth/sign-in" className="flex items-center">
                                    Join our community!
                                    <ArrowRightIcon className="w-4 h-4 ml-2" />
                                </Link>
                            </Button>
                        </div>
                    </AnimationContainer>

                    <AnimationContainer delay={0.2} className="relative pt-20 pb-20 md:py-32 px-2 bg-transparent w-full">
                        <div className="absolute md:top-[10%] left-1/2 gradient w-3/4 -translate-x-1/2 h-1/4 md:h-1/3 inset-0 blur-[5rem] animate-image-glow"></div>
                        <div className="-m-2 rounded-xl p-2 ring-1 ring-inset ring-foreground/20 lg:-m-4 lg:rounded-2xl bg-opacity-50 backdrop-blur-3xl">
                            <BorderBeam size={250} duration={12} delay={9} />
                            <Image
                                src="/assets/Profile Screen (1).png"
                                alt="Dashboard"
                                width={1200}
                                height={1200}
                                quality={100}
                                className="rounded-md lg:rounded-xl bg-foreground/10 ring-1 ring-border"
                            />
                            <div className="absolute -bottom-4 inset-x-0 w-full h-1/2 bg-gradient-to-t from-background z-40"></div>
                            <div className="absolute bottom-0 md:-bottom-8 inset-x-0 w-full h-1/4 bg-gradient-to-t from-background z-50"></div>
                        </div>
                    </AnimationContainer>
                </div>
            </MaxWidthWrapper>

            {/* Companies Section */}
            <MaxWidthWrapper>
                <AnimationContainer delay={0.4}>
                    <div className="py-14">
                        <div className="mx-auto px-4 md:px-8">
                            <h2 className="text-center text-sm font-medium font-heading text-neutral-400 uppercase">
                                Trusted by the best in the industry
                            </h2>
                            <div className="mt-8">
                                <ul className="flex flex-wrap items-center gap-x-6 gap-y-6 md:gap-x-16 justify-center">
                                    {COMPANIES.map((company) => (
                                        <li key={company.name}>
                                            <Image
                                                src={company.logo}
                                                alt={company.name}
                                                width={80}
                                                height={80}
                                                quality={100}
                                                className="w-28 h-auto"
                                            />
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </AnimationContainer>
            </MaxWidthWrapper>

            {/* Products Section */}
            <MaxWidthWrapper className="pt-10">
                <AnimationContainer delay={0.1}>
                    <div className="flex flex-col w-full items-center justify-center py-8">
                        <MagicBadge title="Products" />
                        <h2 className="text-center text-3xl md:text-5xl font-medium font-heading text-foreground mt-6">
                            Crafted for Visionaries Like You
                        </h2>
                        <p className="mt-4 text-center text-lg text-muted-foreground max-w-lg">
                            We create Products that empower you by solving the challenges that truly count.
                        </p>
                    </div>
                </AnimationContainer>
                <AnimationContainer delay={0.2}>
                    <BentoGrid className="py-8">
                        {CARDS.map((feature, idx) => (
                            <BentoCard key={idx} {...feature} />
                        ))}
                    </BentoGrid>
                </AnimationContainer>
            </MaxWidthWrapper>

            {/* Process Section */}
            <MaxWidthWrapper className="py-10">
                <AnimationContainer delay={0.1}>
                    <div className="flex flex-col items-center justify-center w-full py-8 max-w-xl mx-auto">
                        <MagicBadge title="The Process" />
                        <h2 className="text-center text-3xl md:text-5xl font-medium font-heading text-foreground mt-6">
                            From Concept to Creation in 3 Simple Steps
                        </h2>
                        <p className="mt-4 text-center text-lg text-muted-foreground max-w-lg">
                            At Troika Hub, we bring your ideas to life with a seamless, 3-step process designed for visionaries like you.
                        </p>
                    </div>
                </AnimationContainer>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 py-8">
                    {PROCESS.map((process, id) => (
                        <AnimationContainer delay={0.2 * id} key={id}>
                            <MagicCard className="group md:py-8">
                                <div className="flex flex-col items-start">
                                    <process.icon strokeWidth={1.5} className="w-10 h-10 text-foreground" />
                                    <div className="relative mt-6">
                                        <span className="absolute -top-6 right-0 border-2 border-border text-foreground text-2xl rounded-full w-12 h-12 flex items-center justify-center">
                                            {id + 1}
                                        </span>
                                        <h3 className="text-base font-medium text-foreground">{process.title}</h3>
                                        <p className="mt-2 text-sm text-muted-foreground">{process.description}</p>
                                    </div>
                                </div>
                            </MagicCard>
                        </AnimationContainer>
                    ))}
                </div>
            </MaxWidthWrapper>

            {/* Pricing / Team Section */}
            <MaxWidthWrapper className="py-10">
                <AnimationContainer delay={0.1}>
                    <div className="flex flex-col items-center justify-center w-full py-8 max-w-xl mx-auto">
                        <MagicBadge title="Meet The Team" />
                        <h2 className="text-center text-3xl md:text-5xl font-medium font-heading text-foreground mt-6">
                            Meet the Visionaries Behind Troika Hub
                        </h2>
                        <p className="mt-4 text-center text-lg text-muted-foreground max-w-lg">
                            A talented team of creators, developers, and innovators working together to bring bold ideas to life.
                        </p>
                    </div>
                </AnimationContainer>
                <AnimationContainer delay={0.2}>
                    <PricingCards />
                </AnimationContainer>
                <AnimationContainer delay={0.3}>
                    <div className="flex flex-wrap justify-center gap-6 mt-12 max-w-5xl mx-auto">
                        <div className="flex items-center gap-2">
                            <Triangle className="w-5 h-5 text-foreground" />
                            <span className="text-muted-foreground">
                                Troika means a group of three in Russian, so it's a symbol of unity among us three.
                            </span>
                        </div>
                        <div className="flex items-center gap-1">
                            <SquareDashedMousePointer />
                            <span className="text-muted-foreground">
                                Ps: hover over the text in the cards to get more info about them :&gt;
                            </span>
                        </div>
                    </div>
                </AnimationContainer>
            </MaxWidthWrapper>

            {/* Reviews Section */}
            <MaxWidthWrapper className="py-10">
                <AnimationContainer delay={0.1}>
                    <div className="flex flex-col items-center justify-center w-full py-8 max-w-xl mx-auto">
                        <MagicBadge title="Our Customers" />
                        <h2 className="text-center text-3xl md:text-5xl font-medium font-heading text-foreground mt-6">
                            What our users are saying
                        </h2>
                        <p className="mt-4 text-center text-lg text-muted-foreground max-w-lg">
                            Here's what some of our users have to say about Troika & its Products.
                        </p>
                    </div>
                </AnimationContainer>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-10">
                    {REVIEWS.map((review, index) => (
                        <AnimationContainer delay={0.15 * index} key={index}>
                            <MagicCard>
                                <Card className="flex flex-col border-none h-min">
                                    <CardHeader>
                                        <CardTitle className="text-lg font-medium text-muted-foreground">
                                            {review.name}
                                        </CardTitle>
                                        <CardDescription>{review.username}</CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-muted-foreground">{review.review}</p>
                                    </CardContent>
                                    <CardFooter className="space-x-1">
                                        {Array.from({ length: review.rating }).map((_, i) => (
                                            <StarIcon key={i} className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                                        ))}
                                    </CardFooter>
                                </Card>
                            </MagicCard>
                        </AnimationContainer>
                    ))}
                </div>
            </MaxWidthWrapper>

            {/* CTA Section */}
            <MaxWidthWrapper className="mt-20 max-w-[100vw] overflow-x-hidden">
                <AnimationContainer delay={0.1}>
                    <LampContainer>
                        <div className="flex flex-col items-center text-center">
                            <h2 className="bg-gradient-to-b from-neutral-200 to-neutral-400 text-4xl md:text-7xl font-heading tracking-tight text-transparent bg-clip-text mt-8">
                                Reach Out to Troika Hub and Bring Your Vision to Life
                            </h2>
                            <p className="text-muted-foreground mt-6 max-w-md">
                                Whether you have a project in mind or just want to explore ideas, we're here to help make it happen.
                            </p>
                        </div>
                        <FloatingDockDemo />
                    </LampContainer>
                </AnimationContainer>
            </MaxWidthWrapper>
        </div>
    );
};

export default HomePage;
