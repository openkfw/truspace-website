import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCloudBolt,
  faServer,
  faEnvelopeOpenText,
} from "@fortawesome/free-solid-svg-icons";

function Problem() {
  return (
    <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-56 lg:px-8">
      <div className="mx-auto max-w-2xl lg:text-center">
        <h2 className="text-base/7 font-semibold text-indigo-400">
          Inspired by the fediverse
        </h2>
        <p className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-balance">
          Why another document exchange platform?
        </p>
        <p className="mt-6 text-lg/8 text-gray-300">
          Who owns your data when collaborating across organisations?
        </p>
      </div>
      <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
        <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
          <div className="flex flex-col">
            <dt className="text-base/7 font-semibold text-white">
              <div className="mb-6 flex size-10 items-center justify-center rounded-lg bg-indigo-500">
                <FontAwesomeIcon icon={faCloudBolt} />
              </div>
              Do you store documents using a service by BigTech
            </dt>
            <dd className="mt-1 flex flex-auto flex-col text-base/7 text-gray-300">
              <p className="flex-auto">
                Are you sure they don't read your data? Or delete it because of
                an executive order? Or even change it? Will they decide to
                charge more for their service once you are locked in? Who owns
                the admin account to the cloud server?
              </p>
              <p className="mt-6">
                <a
                  href="https://github.com/openkfw/TruSpace"
                  className="text-sm/6 font-semibold text-indigo-400"
                >
                  Learn more <span aria-hidden="true">→</span>
                </a>
              </p>
            </dd>
          </div>
          <div className="flex flex-col">
            <dt className="text-base/7 font-semibold text-white">
              <div className="mb-6 flex size-10 items-center justify-center rounded-lg bg-indigo-500">
                <FontAwesomeIcon icon={faServer} />
              </div>
              Do you store docs using a server of one organisation
            </dt>
            <dd className="mt-1 flex flex-auto flex-col text-base/7 text-gray-300">
              <p className="flex-auto">
                Ok, you agree that data is stored by one organisation using a
                sovereign open source server like NextCloud. Do you trust that
                it will work out forever? That they won't be hacked? That we're
                all friends forever?
              </p>
              <p className="mt-6">
                <a
                  href="https://github.com/openkfw/TruSpace"
                  className="text-sm/6 font-semibold text-indigo-400"
                >
                  Learn more <span aria-hidden="true">→</span>
                </a>
              </p>
            </dd>
          </div>
          <div className="flex flex-col">
            <dt className="text-base/7 font-semibold text-white">
              <div className="mb-6 flex size-10 items-center justify-center rounded-lg bg-indigo-500">
                <FontAwesomeIcon icon={faEnvelopeOpenText} />
              </div>
              Do you share documents using eMail
            </dt>
            <dd className="mt-1 flex flex-auto flex-col text-base/7 text-gray-300">
              <p className="flex-auto">
                Doesn't sound too bad - everyone is storing their own data,
                eMail is a nice federated system with less dependencies. If
                there weren't all the problems with different versions, file
                limits and overall handling.
              </p>
              <p className="mt-6">
                <a
                  href="https://github.com/openkfw/TruSpace"
                  className="text-sm/6 font-semibold text-indigo-400"
                >
                  Learn more <span aria-hidden="true">→</span>
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
