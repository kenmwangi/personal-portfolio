import Link from 'next/link';
import { pricingPlans } from '../data/pricing';

const PricingPlans = () => {
  return (
    <div className="relative">
      {/* background decorations */}
      <div className="absolute inset-0 flex flex-col">
        <div className="flex-1"></div>
        <div className="bg-slate-50 flex-1"></div>
      </div>
      <section className="mx-auto max-w-7xl grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-12 lg:gap-8 py-24 px-4 sm:px-6 lg:px-8">
        {pricingPlans.map((pricingPlan) => (
          <section
            key={pricingPlan.id}
            className="rounded-xl border border-slate-200 bg-white p-8 shadow-lg relative flex flex-col"
          >
            <h3 className="text-lg font-semibold leading-5">
              {pricingPlan.title}
            </h3>
            {pricingPlan.mostPopular && (
              <p className="absolute top-0 -translate-y-1/2 bg-cyan-500 text-white py-0.5 px-3 text-sm font-semibold tracking-wide rounded-full shadow-md">
                Most Popular
              </p>
            )}
            <p className="mt-4 text-sm leading-6 text-slate-700">
              {pricingPlan.description}
            </p>

            <div className="-mx-6 mt-4 rounded-lg bg-slate-50 p-6">
              <p className="flex items-center text-sm font-semibold text-slate-500">
                <span>{pricingPlan.currency}</span>
                <span className="ml-3 text-4xl text-slate-900">
                  ${pricingPlan.price}
                </span>
                <span className="ml-1.5">{pricingPlan.frequency}</span>
              </p>
            </div>

            {/* Features */}
            <ul className="mt-6 space-y-4 flex-1">
              {pricingPlan.features.map((feature) => (
                <li
                  key={feature}
                  className="text-sm text-slate-700 leading-6 flex items-center mb-4 mt-6"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 text-cyan-500 shrink-0"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>

                  <span className="ml-3">{feature}</span>
                </li>
              ))}
            </ul>
            <Link
              href="/"
              className={`mt-8 block px-6 py-4 leading-4 text-sm text-center font-semibold rounded-lg
            ${
              pricingPlan.mostPopular
                ? 'text-white bg-cyan-500 hover:bg-cyan-600 shadow-md'
                : 'text-cyan-700 bg-cyan-50 hover:bg-cyan-100'
            }
            `}
            >
              {pricingPlan.cta}
            </Link>
          </section>
        ))}
      </section>
    </div>
  );
};

export default PricingPlans;
