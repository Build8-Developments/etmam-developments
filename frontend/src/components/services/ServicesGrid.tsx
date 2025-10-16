'use client';

import { ServiceCard } from './ServiceCard';

interface Service {
  id: string;
  title: string;
  description: string;
  price: string;
  duration: string;
  icon: string;
}

interface ServicesGridProps {
  services: Service[];
  baseHref: string;
  title?: string;
  description?: string;
  showDetails?: boolean;
}

export const ServicesGrid = ({ 
  services, 
  baseHref, 
  title, 
  description, 
  showDetails = true 
}: ServicesGridProps) => {

  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {(title || description) && (
          <div className="text-center mb-12">
            {title && (
              <h2 
                className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4"
                style={{ fontFamily: 'var(--font-almarai)' }}
              >
                {title}
              </h2>
            )}
            {description && (
              <p 
                className="text-lg text-gray-600 max-w-3xl mx-auto"
                style={{ fontFamily: 'var(--font-almarai)' }}
              >
                {description}
              </p>
            )}
          </div>
        )}

        <div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          style={{
            maxWidth: '1147px',
            margin: '0 auto'
          }}
        >
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              href={`${baseHref}/${service.id}`}
              showDetails={showDetails}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
