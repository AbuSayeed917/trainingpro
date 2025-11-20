import Image from "next/image";
import { Container } from "@/components/ui";

const partners = [
  {
    name: "AAT",
    description: "Association of Accounting Technicians",
    logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&q=80"
  },
  {
    name: "ICB",
    description: "Institute of Certified Bookkeepers",
    logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=200&q=80"
  },
  {
    name: "CIPP",
    description: "Chartered Institute of Payroll Professionals",
    logo: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=200&q=80"
  },
  {
    name: "ACCA",
    description: "Association of Chartered Certified Accountants",
    logo: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=200&q=80"
  },
  {
    name: "HMRC",
    description: "Approved Training Provider",
    logo: "https://images.unsplash.com/photo-1572883454114-1cf0031ede2a?w=200&q=80"
  },
  {
    name: "Sage",
    description: "Certified Partner",
    logo: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=200&q=80"
  },
];

const companies = [
  {
    name: "Deloitte",
    logo: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=300&q=80"
  },
  {
    name: "PwC",
    logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=300&q=80"
  },
  {
    name: "KPMG",
    logo: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=300&q=80"
  },
  {
    name: "EY",
    logo: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=300&q=80"
  },
  {
    name: "Grant Thornton",
    logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=300&q=80"
  },
  {
    name: "BDO",
    logo: "https://images.unsplash.com/photo-1572883454114-1cf0031ede2a?w=300&q=80"
  },
  {
    name: "RSM UK",
    logo: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=300&q=80"
  },
  {
    name: "Mazars",
    logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=300&q=80"
  },
  {
    name: "Smith & Williamson",
    logo: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=300&q=80"
  },
  {
    name: "PKF Littlejohn",
    logo: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=300&q=80"
  },
];

export function TrustedBy() {
  return (
    <section className="section-padding bg-gray-900 text-white">
      <Container>
        {/* Accreditations */}
        <div className="mb-16">
          <h2 className="text-center text-sm font-semibold tracking-wider text-gray-400 uppercase mb-8">
            Accredited & Approved By
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center p-6 bg-gray-800/50 rounded-xl hover:bg-gray-800 transition-all group relative overflow-hidden"
              >
                {/* Logo Image Background */}
                <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity">
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    fill
                    className="object-cover grayscale"
                    sizes="200px"
                  />
                </div>
                <div className="relative z-10 text-2xl font-bold text-white group-hover:text-primary-400 transition-colors mb-2">
                  {partner.name}
                </div>
                <div className="relative z-10 text-xs text-gray-400 text-center">
                  {partner.description}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Partner Companies */}
        <div className="border-t border-gray-800 pt-16">
          <h2 className="text-center text-sm font-semibold tracking-wider text-gray-400 uppercase mb-8">
            Our Graduates Work At
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {companies.map((company, index) => (
              <div
                key={index}
                className="group relative flex items-center justify-center p-6 rounded-lg bg-gray-800/30 hover:bg-gray-800/50 transition-all overflow-hidden"
              >
                {/* Company Logo Background */}
                <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Image
                    src={company.logo}
                    alt={company.name}
                    fill
                    className="object-cover grayscale"
                    sizes="300px"
                  />
                </div>
                <span className="relative z-10 text-lg font-semibold text-gray-400 group-hover:text-white transition-colors">
                  {company.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Key Features */}
        <div className="mt-16 pt-16 border-t border-gray-800">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary-400 mb-2">Industry</div>
              <div className="text-gray-400">Standard Training</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary-400 mb-2">Expert</div>
              <div className="text-gray-400">Led Sessions</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary-400 mb-2">Career</div>
              <div className="text-gray-400">Focused Support</div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
