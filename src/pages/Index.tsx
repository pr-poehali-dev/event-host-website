import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('hero');

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setActiveSection(sectionId);
  };

  const services = [
    {
      icon: 'Briefcase',
      title: 'Корпоративные мероприятия',
      description: 'Организация и проведение бизнес-событий, конференций, презентаций',
      color: 'bg-black'
    },
    {
      icon: 'Heart',
      title: 'Свадьбы',
      description: 'Незабываемое проведение самого важного дня в вашей жизни',
      color: 'bg-accent'
    },
    {
      icon: 'PartyPopper',
      title: 'Дни рождения',
      description: 'Яркие праздники для взрослых и детей с интересной программой',
      color: 'bg-black'
    },
    {
      icon: 'Sparkles',
      title: 'Особые события',
      description: 'Юбилеи, выпускные, тематические вечеринки',
      color: 'bg-accent'
    }
  ];

  const portfolio = [
    {
      image: 'https://cdn.poehali.dev/projects/0c3c9504-b9fb-4367-89e6-c3331fc2ee93/files/992a4ce5-b9a9-4f4f-b92d-5d8f8e521e1c.jpg',
      title: 'Корпоративная конференция',
      description: '200+ участников',
    },
    {
      image: 'https://cdn.poehali.dev/projects/0c3c9504-b9fb-4367-89e6-c3331fc2ee93/files/c8af1151-a00e-4c5e-a9c9-91f6cf2c36c9.jpg',
      title: 'Свадьба Анны и Дмитрия',
      description: '150 гостей',
    },
    {
      image: 'https://cdn.poehali.dev/projects/0c3c9504-b9fb-4367-89e6-c3331fc2ee93/files/20b20fd8-0df6-467b-9a26-fd827ce176a8.jpg',
      title: 'День рождения - 35 лет',
      description: '80 гостей',
    }
  ];

  const testimonials = [
    {
      name: 'Анна Петрова',
      role: 'Невеста',
      text: 'Роман сделал нашу свадьбу незабываемой! Энергия, профессионализм и внимание к деталям на высшем уровне.',
      rating: 5
    },
    {
      name: 'Сергей Иванов',
      role: 'Директор компании',
      text: 'Проводили корпоратив с Романом - все прошло идеально. Гости в восторге, атмосфера была потрясающей!',
      rating: 5
    },
    {
      name: 'Мария Соколова',
      role: 'Организатор событий',
      text: 'Работаем с Романом уже 3 года. Надежный профессионал, всегда находит подход к любой аудитории.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <nav className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-sm border-b border-black/10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-black">Роман Зеленский</h1>
            <div className="hidden md:flex gap-6">
              {['hero', 'about', 'services', 'portfolio', 'testimonials', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="text-black/70 hover:text-accent transition-colors font-medium"
                >
                  {section === 'hero' && 'Главная'}
                  {section === 'about' && 'О себе'}
                  {section === 'services' && 'Услуги'}
                  {section === 'portfolio' && 'Портфолио'}
                  {section === 'testimonials' && 'Отзывы'}
                  {section === 'contact' && 'Контакты'}
                </button>
              ))}
            </div>
            <Button className="hidden md:flex bg-accent hover:bg-accent/90" onClick={() => scrollToSection('contact')}>
              Связаться
            </Button>
          </div>
        </div>
      </nav>

      <section id="hero" className="min-h-screen flex items-center justify-center pt-20 px-4 bg-gradient-to-br from-white via-gray-50 to-accent/5">
        <div className="container mx-auto text-center animate-fade-in">
          <div className="mb-8">
            <h2 className="text-6xl md:text-8xl font-bold text-black mb-6">
              Роман Зеленский
            </h2>
            <p className="text-2xl md:text-3xl text-accent font-semibold mb-4">
              Ведущий мероприятий
            </p>
            <p className="text-lg md:text-xl text-black/60 max-w-2xl mx-auto">
              Создаю незабываемые события с 2015 года. Более 500 проведенных мероприятий и тысячи довольных гостей.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="text-lg px-8 py-6 bg-black hover:bg-black/90" onClick={() => scrollToSection('portfolio')}>
              <Icon name="Play" className="mr-2" size={20} />
              Посмотреть работы
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-black text-black hover:bg-black hover:text-white" onClick={() => scrollToSection('contact')}>
              <Icon name="Phone" className="mr-2" size={20} />
              Заказать звонок
            </Button>
          </div>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="p-6 bg-white border-2 border-black rounded-2xl animate-scale-in hover:shadow-xl transition-shadow">
              <div className="text-4xl font-bold text-accent mb-2">500+</div>
              <div className="text-black/70">Мероприятий</div>
            </div>
            <div className="p-6 bg-white border-2 border-black rounded-2xl animate-scale-in hover:shadow-xl transition-shadow" style={{ animationDelay: '0.1s' }}>
              <div className="text-4xl font-bold text-accent mb-2">10</div>
              <div className="text-black/70">Лет опыта</div>
            </div>
            <div className="p-6 bg-white border-2 border-black rounded-2xl animate-scale-in hover:shadow-xl transition-shadow" style={{ animationDelay: '0.2s' }}>
              <div className="text-4xl font-bold text-accent mb-2">100%</div>
              <div className="text-black/70">Позитива</div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4 bg-black text-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-5xl font-bold text-center mb-12 text-white">О себе</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-white/80 leading-relaxed">
                Привет! Я Роман - профессиональный ведущий с 10-летним опытом работы. За это время я провел более 500 мероприятий различного формата и масштаба.
              </p>
              <p className="text-lg text-white/80 leading-relaxed">
                Моя специализация - создание атмосферы праздника и вовлечение гостей. Каждое событие для меня уникально, и я всегда нахожу индивидуальный подход к аудитории.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-accent text-white rounded-full font-medium">Харизматичный</span>
                <span className="px-4 py-2 bg-white text-black rounded-full font-medium">Энергичный</span>
                <span className="px-4 py-2 bg-accent text-white rounded-full font-medium">Креативный</span>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://cdn.poehali.dev/projects/0c3c9504-b9fb-4367-89e6-c3331fc2ee93/files/992a4ce5-b9a9-4f4f-b92d-5d8f8e521e1c.jpg" 
                alt="Роман Зеленский" 
                className="rounded-2xl shadow-2xl w-full hover:scale-105 transition-transform duration-300 border-4 border-accent"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-5xl font-bold text-center mb-4 text-black">Услуги</h2>
          <p className="text-center text-black/70 mb-12 text-lg max-w-2xl mx-auto">
            Провожу мероприятия любого формата с полным погружением в атмосферу вашего праздника
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="border-2 border-black shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className={`w-16 h-16 ${service.color} rounded-2xl flex items-center justify-center mb-4`}>
                    <Icon name={service.icon as any} size={32} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-black">{service.title}</h3>
                  <p className="text-black/70">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-5xl font-bold text-center mb-4 text-black">Портфолио</h2>
          <p className="text-center text-black/70 mb-12 text-lg max-w-2xl mx-auto">
            Фотографии с прошлых мероприятий - каждое событие особенное!
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {portfolio.map((item, index) => (
              <div 
                key={index} 
                className="group relative overflow-hidden rounded-2xl border-2 border-black shadow-lg hover:shadow-2xl transition-all duration-300 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                    <p className="text-white/90">{item.description}</p>
                  </div>
                </div>
                <div className="absolute top-4 right-4 w-8 h-8 bg-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="testimonials" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-5xl font-bold text-center mb-4 text-black">Отзывы</h2>
          <p className="text-center text-black/70 mb-12 text-lg max-w-2xl mx-auto">
            Что говорят обо мне клиенты
          </p>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={index} 
                className="border-2 border-black shadow-lg hover:shadow-2xl transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={20} className="text-accent fill-accent" />
                    ))}
                  </div>
                  <p className="text-black/80 mb-6 italic">"{testimonial.text}"</p>
                  <div>
                    <p className="font-bold text-black">{testimonial.name}</p>
                    <p className="text-sm text-black/60">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-4 bg-accent">
        <div className="container mx-auto max-w-2xl">
          <h2 className="text-5xl font-bold text-center mb-4 text-white">Контакты</h2>
          <p className="text-center text-white/90 mb-12 text-lg">
            Свяжитесь со мной для обсуждения вашего мероприятия
          </p>
          <Card className="border-2 border-white shadow-2xl">
            <CardContent className="p-8">
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Ваше имя</label>
                  <Input placeholder="Иван Иванов" className="h-12 border-2 border-black" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Телефон</label>
                  <Input placeholder="+7 (999) 123-45-67" className="h-12 border-2 border-black" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <Input type="email" placeholder="ivan@example.com" className="h-12 border-2 border-black" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Тип мероприятия</label>
                  <Input placeholder="Например: свадьба, корпоратив" className="h-12 border-2 border-black" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Сообщение</label>
                  <Textarea placeholder="Расскажите о вашем мероприятии..." rows={4} className="border-2 border-black" />
                </div>
                <Button className="w-full h-12 text-lg bg-black hover:bg-black/90 text-white" size="lg">
                  <Icon name="Send" className="mr-2" size={20} />
                  Отправить заявку
                </Button>
              </form>
              <div className="mt-8 pt-8 border-t border-black/20">
                <div className="flex flex-col sm:flex-row justify-center gap-6">
                  <a href="tel:+79991234567" className="flex items-center gap-2 text-black hover:text-white transition-colors justify-center">
                    <Icon name="Phone" size={20} />
                    <span>+7 (999) 123-45-67</span>
                  </a>
                  <a href="mailto:info@example.com" className="flex items-center gap-2 text-black hover:text-white transition-colors justify-center">
                    <Icon name="Mail" size={20} />
                    <span>info@example.com</span>
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="bg-black text-white py-8 px-4">
        <div className="container mx-auto text-center">
          <p className="text-white/80">
            © 2024 Роман Зеленский - Ведущий мероприятий. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
