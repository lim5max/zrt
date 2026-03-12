import React from 'react';
import { Search, Menu, MoveRight } from 'lucide-react';
import { motion } from 'framer-motion';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from './ui/navigation-menu';
import { cn } from '../lib/utils';

const ListItem = React.forwardRef(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink
        ref={ref}
        className={cn(
          "block select-none rounded-lg px-3 py-2 leading-none no-underline outline-none transition-colors hover:bg-slate-50 focus:bg-slate-50",
          className
        )}
        {...props}
      >
        <div className="font-heading text-sm font-semibold text-dark-blue mb-1">{title}</div>
        <p className="line-clamp-2 text-xs text-slate-500 leading-snug">
          {children}
        </p>
        <span className="inline-flex items-center gap-1 text-[11px] font-bold tracking-wide text-turquoise mt-2">
          подробнее
        </span>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

const Header = () => {
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={cn(
        "fixed top-0 left-0 w-full z-50 bg-white py-4 transition-shadow duration-300",
        scrolled && "border-b border-black/10 shadow-sm"
      )}
    >
      <div className="container flex items-center justify-between">
        <div className="flex items-center gap-10">
          <img src="/logo.svg" alt="ЦРТ" className="h-8" />

          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList className="flex items-center gap-1">
              {/* Продукты */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent hover:bg-transparent data-[state=open]:bg-transparent text-base font-normal tracking-normal text-dark-blue hover:opacity-60 transition-opacity">
                  Продукты
                </NavigationMenuTrigger>
                <NavigationMenuContent className="bg-white">
                  <div className="p-3 w-[400px]">
                    <h4 className="text-[11px] font-semibold tracking-wide text-slate-400 uppercase mb-2 px-3">
                      Кому подойдет
                    </h4>
                    <ul className="grid grid-cols-2 gap-2">
                      <ListItem href="#" title="Агентствам">
                        проджект, ресурс и клиент менеджмент в одном окне
                      </ListItem>
                      <ListItem href="#" title="Креативным командам">
                        редакторам, SMM-щикам, видеомонтажёрам, дизайнерам
                      </ListItem>
                      <ListItem href="#" title="Создающим продукты">
                        весь производственный цикл от идеи до вывода на рынок
                      </ListItem>
                      <ListItem href="#" title="Разработчикам">
                        для работы по скрам, эджайлу, канбану, ватерфолу
                      </ListItem>
                    </ul>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Решения */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent hover:bg-transparent data-[state=open]:bg-transparent text-base font-normal tracking-normal text-dark-blue hover:opacity-60 transition-opacity">
                  Решения
                </NavigationMenuTrigger>
                <NavigationMenuContent className="bg-white">
                  <div className="p-3 w-[400px]">
                    <h4 className="text-[11px] font-semibold tracking-wide text-slate-400 uppercase mb-2 px-3">
                      По индустриям
                    </h4>
                    <ul className="grid grid-cols-2 gap-2">
                      <ListItem href="#" title="Банки и финансы">
                        голосовая биометрия, антифрод, речевая аналитика
                      </ListItem>
                      <ListItem href="#" title="Телеком">
                        виртуальные ассистенты, IVR, роботы для колл-центров
                      </ListItem>
                      <ListItem href="#" title="Ритейл">
                        омниканальная поддержка клиентов
                      </ListItem>
                      <ListItem href="#" title="Госсектор">
                        решения для государственных организаций
                      </ListItem>
                    </ul>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Услуги */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent hover:bg-transparent data-[state=open]:bg-transparent text-base font-normal tracking-normal text-dark-blue hover:opacity-60 transition-opacity">
                  Услуги
                </NavigationMenuTrigger>
                <NavigationMenuContent className="bg-white">
                  <div className="p-3 w-[280px]">
                    <ul className="grid gap-1">
                      <ListItem href="#" title="Консалтинг">
                        аудит и стратегия цифровой трансформации
                      </ListItem>
                      <ListItem href="#" title="Интеграция">
                        внедрение решений в существующую инфраструктуру
                      </ListItem>
                      <ListItem href="#" title="Поддержка">
                        техническая поддержка и сопровождение
                      </ListItem>
                    </ul>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* О компании */}
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="#about"
                  className="text-base font-normal tracking-normal text-dark-blue hover:opacity-60 transition-opacity bg-transparent hover:bg-transparent"
                >
                  О компании
                </NavigationMenuLink>
              </NavigationMenuItem>

              {/* Больше */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent hover:bg-transparent data-[state=open]:bg-transparent text-base font-normal tracking-normal text-dark-blue hover:opacity-60 transition-opacity">
                  Больше
                </NavigationMenuTrigger>
                <NavigationMenuContent className="bg-white">
                  <div className="p-3 w-[320px]">
                    <ul className="grid grid-cols-2 gap-1">
                      <ListItem href="#" title="Новости">
                        последние события и анонсы
                      </ListItem>
                      <ListItem href="#" title="Карьера">
                        вакансии и жизнь в компании
                      </ListItem>
                      <ListItem href="#" title="Партнёрам">
                        программа партнёрства
                      </ListItem>
                      <ListItem href="#" title="Контакты">
                        офисы и представительства
                      </ListItem>
                    </ul>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="flex items-center gap-3">
          <button className="w-11 h-11 rounded-full border border-black/10 bg-transparent flex items-center justify-center hover:bg-black/5 transition-colors">
            <Search size={20} strokeWidth={2} />
          </button>
          <button className="h-11 rounded-full bg-dark-blue text-white px-7 text-base font-normal tracking-normal flex items-center hover:bg-slate-800 transition-colors">
            Связаться
          </button>
          <button className="h-11 rounded-full bg-black/5 text-dark-blue px-5 text-base font-normal tracking-normal flex items-center gap-2.5 border border-black/5 hover:bg-black/10 transition-colors">
            Меню <Menu size={20} strokeWidth={2} />
          </button>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
