import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className=" mt-10">
      {/* Newsletter Section */}
      <div className="relative bg-[#002f36] text-white px-6 py-12 text-center mb-10">
        {/* Avatars */}
        <div className="absolute top-6 left-6 w-10 h-10 rounded-full overflow-hidden">
          <Image src="/images/avatar2.jpg" alt="user" layout="fill" objectFit="cover" />
        </div>
        <div className="absolute bottom-6 left-10 w-10 h-10 rounded-full overflow-hidden">
          <Image src="/images/avatar2.jpg" alt="user" layout="fill" objectFit="cover" />
        </div>
        <div className="absolute top-6 right-10 w-10 h-10 rounded-full overflow-hidden">
          <Image src="/images/avatar2.jpg" alt="user" layout="fill" objectFit="cover" />
        </div>
        <div className="absolute bottom-8 right-4 w-10 h-10 rounded-full overflow-hidden">
          <Image src="/images/avatar2.jpg" alt="user" layout="fill" objectFit="cover" />
        </div>

        <h2 className="text-2xl sm:text-3xl font-semibold mb-2">Subscribe For Get Update Every New Courses</h2>
        <p className="mb-6 text-sm opacity-80">20k+ students daily learn with Eduvi. Subscribe for new courses.</p>
        <div className="max-w-md mx-auto flex">
          <input
            type="email"
            placeholder="enter your email"
            className="flex-grow px-4 rounded-l-sm focus:outline-none"
          />
          <button className="bg-primary px-6 py-2 rounded-r-sm text-white">
            Subscribe
          </button>
        </div>
      </div>

      {/* Footer Links Section */}
      <div className="max-w-7xl mx-auto px-6 pb-10">
        <div className="grid md:grid-cols-5 sm:grid-cols-2 gap-8 text-sm">
          {/* Logo and Social */}
          <div>
            <h1 className="text-xl font-bold mb-2 flex items-center gap-2">
              <Image 
                src={"/images/langvora-title.png"}
                alt='LangVora'
                height={100}
                width={150}
                />
            </h1>
            <div className="flex space-x-4 mt-4">
              <Link href="/"><i className="fab fa-facebook text-xl"></i></Link>
              <Link href="/"><i className="fab fa-instagram text-xl"></i></Link>
              <Link href="/"><i className="fab fa-twitter text-xl"></i></Link>
              <Link href="/"><i className="fab fa-linkedin text-xl"></i></Link>
            </div>
            <p className="text-xs mt-4">©2025 LangVora.co<br/>LangVora is a registered trademark of LangVora.co</p>
          </div>

          {/* Courses */}
          <div>
            <h4 className="font-semibold mb-3">Courses</h4>
            <ul className="space-y-2">
              <li>Classroom courses</li>
              <li>Virtual classroom courses</li>
              <li>E-learning courses</li>
              <li>Video Courses</li>
              <li>Offline Courses</li>
            </ul>
          </div>

          {/* Community */}
          <div>
            <h4 className="font-semibold mb-3">Community</h4>
            <ul className="space-y-2">
              <li>Learners</li>
              <li>Partners</li>
              <li>Developers</li>
              <li>Transactions</li>
              <li>Blog</li>
              <li>Teaching Center</li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-3">Quick links</h4>
            <ul className="space-y-2">
              <li>Home</li>
              <li>Professional Education</li>
              <li>Courses</li>
              <li>Admissions</li>
              <li>Testimonial</li>
              <li>Programs</li>
            </ul>
          </div>

          {/* More */}
          <div>
            <h4 className="font-semibold mb-3">More</h4>
            <ul className="space-y-2">
              <li>Press</li>
              <li>Investors</li>
              <li>Terms</li>
              <li>Privacy</li>
              <li>Help</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
