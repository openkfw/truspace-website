import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCloudBolt,
  faServer,
  faEnvelopeOpenText,
} from "@fortawesome/free-solid-svg-icons";
import { useLanguage } from '../i18n/LanguageProvider';

function Problem() {
  const { strings } = useLanguage();

  return (
    <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-56 lg:px-8">
      <div className="mx-auto max-w-2xl lg:text-center">
        <h2 className="text-base/7 font-semibold text-indigo-400">
          {strings.problem_subtitle}
        </h2>
        <p className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-balance">
          {strings.problem_title}
        </p>
        <p className="mt-6 text-lg/8 text-gray-300">
          {strings.problem_catchphrase}
        </p>
      </div>
      <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
        <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
          <div className="flex flex-col">
            <dt className="text-base/7 font-semibold text-white">
              <div className="mb-6 flex size-10 items-center justify-center rounded-lg bg-indigo-500">
                <FontAwesomeIcon icon={faCloudBolt} />
              </div>
              {strings.subproblem1_title}
            </dt>
            <dd className="mt-1 flex flex-auto flex-col text-base/7 text-gray-300">
              <p className="flex-auto">
                {strings.subproblem1_explanation}
              </p>
              <p className="mt-6">
                <a
                  href="https://github.com/openkfw/TruSpace"
                  className="text-sm/6 font-semibold text-indigo-400"
                >
                  {strings.learn_more} <span aria-hidden="true">→</span>
                </a>
              </p>
            </dd>
          </div>
          <div className="flex flex-col">
            <dt className="text-base/7 font-semibold text-white">
              <div className="mb-6 flex size-10 items-center justify-center rounded-lg bg-indigo-500">
                <FontAwesomeIcon icon={faServer} />
              </div>
              {strings.subproblem2_title}
            </dt>
            <dd className="mt-1 flex flex-auto flex-col text-base/7 text-gray-300">
              <p className="flex-auto">
                {strings.subproblem2_explanation}
              </p>
              <p className="mt-6">
                <a
                  href="https://github.com/openkfw/TruSpace"
                  className="text-sm/6 font-semibold text-indigo-400"
                >
                  {strings.learn_more} <span aria-hidden="true">→</span>
                </a>
              </p>
            </dd>
          </div>
          <div className="flex flex-col">
            <dt className="text-base/7 font-semibold text-white">
              <div className="mb-6 flex size-10 items-center justify-center rounded-lg bg-indigo-500">
                <FontAwesomeIcon icon={faEnvelopeOpenText} />
              </div>
              {strings.subproblem3_title}
            </dt>
            <dd className="mt-1 flex flex-auto flex-col text-base/7 text-gray-300">
              <p className="flex-auto">
                {strings.subproblem3_explanation}
              </p>
              <p className="mt-6">
                <a
                  href="https://github.com/openkfw/TruSpace"
                  className="text-sm/6 font-semibold text-indigo-400"
                >
                  {strings.learn_more} <span aria-hidden="true">→</span>
                </a>
              </p>
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
}

export default Problem;
