"use client";
import { Book, Menu, Sunset, Trees, Zap } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/app/components/ui/accordion";
import { Button } from "@/app/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/app/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/app/components/ui/sheet";
import { useMemo } from "react";
import Link from "next/link";

interface MenuItem {
  title: string;
  url: string;
  description?: string;
  icon?: React.ReactNode;
  items?: MenuItem[];
}

interface NavbarProps {
  logo?: {
    url: string;
    src: string;
    alt: string;
    title: string;
  };
  menu?: MenuItem[];
  btn?: {
    buttonA: {
      title: string;
      url: string;
    };
    buttonB: {
      title: string;
      url: string;
    };
  };
}

const Navbar = ({
  logo = {
    url: "/",
    src: "/logo_1.png",
    alt: "Logo du cabinet de psychomotricité Marion Couasse",
    title: "Marion Couasse",
  },
  menu = [
    { title: "À propos", url: "/about" },
    {
      title: "Psychomotricité",
      url: "/psychomotricite",
      // items: [
      //   {
      //     title: "Qu’est-ce que la psychomotricité ?",
      //     description: "Harmonise corps et esprit par le mouvement",
      //     icon: <Book className="size-5 shrink-0" />,
      //     url: "/psychomotricite",
      //   },
      //   {
      //     title: "Pour qui et pourquoi ?",
      //     description: "Aide tous âges face aux difficultés motrices",
      //     icon: <Trees className="size-5 shrink-0" />,
      //     url: "/psychomotricite",
      //   },
      //   {
      //     title: "Le bilan et les séances",
      //     description: "Evaluent besoins et favorisent bien-être global",
      //     icon: <Sunset className="size-5 shrink-0" />,
      //     url: "/psychomotricite",
      //   },
      // ],
    },
    {
      title: "Bilans & Séances",
      url: "/bilans-seances",
      // items: [
      //   {
      //     title: "Les bilans et observations cliniques",
      //     description: "Evaluent capacités, besoins et évolution psychomotrice",
      //     icon: <Zap className="size-5 shrink-0" />,
      //     url: "/bilans-seances",
      //   },
      //   {
      //     title: "Les séances",
      //     description: "Développent motricité, équilibre et confiance en soi",
      //     icon: <Sunset className="size-5 shrink-0" />,
      //     url: "/bilans-seances",
      //   },
      //   {
      //     title: "Les séances de relaxation pour adultes",
      //     description:
      //       "Apaisent tensions physiques et mentales, favorisant bien-être",
      //     icon: <Trees className="size-5 shrink-0" />,
      //     url: "/bilans-seances/#feature-3",
      //   },
      // ],
    },
    {
      title: "Infos utiles",
      url: "/infos-utiles",
    },
  ],
  btn = {
    buttonA: {
      title: "Prendre rendez-vous",
      url: "https://docorga.com/praticien/66deb2fdfe355c835a95fd2f",
    },
    buttonB: { title: "Contact", url: "/#contact" },
  },
}: NavbarProps) => {
  const memoMenu = useMemo(() => menu, [menu]);
  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 bg-background/90 py-5 backdrop-blur-sm shadow-sm border-b"
      role="navigation"
      aria-label="Navigation principale"
    >
      <div className="container mx-auto">
        {/* Desktop Menu */}
        <nav className="hidden justify-between items-center w-full lg:flex">
          <div className="flex items-center justify-between w-full px-5">
            {/* Logo */}
            <Link
              href={logo.url}
              className="flex items-center gap-2"
              aria-label="Accueil"
            >
              <img
                src={logo.src}
                className="max-h-8 dark:invert"
                alt={logo.alt}
              />
              <span className="text-lg font-semibold tracking-tighter">
                {logo.title}
              </span>
            </Link>
            <div className="flex items-center gap-10">
              <NavigationMenu>
                <NavigationMenuList>
                  {menu.map((item) => renderMenuItem(item))}
                </NavigationMenuList>
              </NavigationMenu>
            </div>
          </div>
          <div className="flex gap-2">
            <Button asChild variant="outline" size="sm">
              <Link href={btn.buttonA.url}>{btn.buttonA.title}</Link>
            </Button>
            <Button asChild size="sm">
              <Link href={btn.buttonB.url}>{btn.buttonB.title}</Link>
            </Button>
          </div>
        </nav>

        {/* Mobile Menu */}
        <nav className="block lg:hidden">
          <div className="flex items-center justify-between px-5">
            {/* Logo */}
            <Link
              href={logo.url}
              className="flex items-center gap-2"
              aria-label="Accueil"
            >
              <img
                src={logo.src}
                className="max-h-8 dark:invert"
                alt={logo.alt}
              />
            </Link>
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  aria-label="Ouvrir le menu mobile"
                >
                  <Menu className="size-4" />
                </Button>
              </SheetTrigger>
              <SheetContent
                className="overflow-y-auto"
                aria-label="Menu mobile"
              >
                <SheetHeader>
                  <SheetTitle>
                    <Link href={logo.url} className="flex items-center gap-2">
                      <img
                        src={logo.src}
                        className="max-h-8 dark:invert"
                        alt={logo.alt}
                      />
                    </Link>
                  </SheetTitle>
                </SheetHeader>
                <div className="flex flex-col gap-6 p-4">
                  <Accordion
                    type="single"
                    collapsible
                    className="flex w-full flex-col gap-4"
                  >
                    {menu.map((item) => renderMobileMenuItem(item))}
                  </Accordion>

                  <div className="flex flex-col gap-3">
                    <Button asChild variant="outline">
                      <Link href={btn.buttonA.url}>{btn.buttonA.title}</Link>
                    </Button>
                    <Button asChild>
                      <Link href={btn.buttonB.url}>{btn.buttonB.title}</Link>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </nav>
      </div>
    </nav>
  );
};

const renderMenuItem = (item: MenuItem) => {
  if (item.items) {
    return (
      <NavigationMenuItem key={item.title}>
        <NavigationMenuTrigger>{item.title}</NavigationMenuTrigger>
        <NavigationMenuContent className="bg-popover text-popover-foreground">
          {item.items.map((subItem) => (
            <NavigationMenuLink
              asChild
              key={subItem.title}
              className="w-80"
              role="menuitem"
            >
              <SubMenuLink item={subItem} />
            </NavigationMenuLink>
          ))}
        </NavigationMenuContent>
      </NavigationMenuItem>
    );
  }

  return (
    <NavigationMenuItem key={item.title}>
      <NavigationMenuLink
        href={item.url}
        className="bg-background hover:bg-muted hover:text-accent-foreground group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors"
      >
        {item.title}
      </NavigationMenuLink>
    </NavigationMenuItem>
  );
};

const renderMobileMenuItem = (item: MenuItem) => {
  if (item.items) {
    return (
      <AccordionItem key={item.title} value={item.title} className="border-b-0">
        <AccordionTrigger className="text-md py-0 font-semibold hover:no-underline">
          {item.title}
        </AccordionTrigger>
        <AccordionContent className="mt-2">
          {item.items.map((subItem) => (
            <SubMenuLink key={subItem.title} item={subItem} />
          ))}
        </AccordionContent>
      </AccordionItem>
    );
  }

  return (
    <Link
      key={item.title}
      href={item.url}
      className="text-md font-semibold"
      role="menuitem"
    >
      {item.title}
    </Link>
  );
};

const SubMenuLink = ({ item }: { item: MenuItem }) => {
  return (
    <Link
      className="hover:bg-muted hover:text-accent-foreground flex min-w-80 select-none flex-row gap-4 rounded-md p-3 leading-none no-underline outline-none transition-colors"
      href={item.url}
      role="menuitem"
    >
      <div className="text-foreground">{item.icon}</div>
      <div>
        <div className="text-sm font-semibold">{item.title}</div>
        {item.description && (
          <p className="text-muted-foreground text-sm leading-snug">
            {item.description}
          </p>
        )}
      </div>
    </Link>
  );
};

export { Navbar };
