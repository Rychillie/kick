import { signin } from '@/actions';
import { Button, LoadingDots } from '@/components/elements';
import Modal from '@/components/elements/modal';
import { Title } from '@radix-ui/react-dialog';
import Image from 'next/image';
import {
  Dispatch,
  SetStateAction,
  useCallback,
  useMemo,
  useState
} from 'react';

const SignInModal = ({
  showSignInModal,
  setShowSignInModal
}: {
  showSignInModal: boolean;
  setShowSignInModal: Dispatch<SetStateAction<boolean>>;
}) => {
  const [signInClicked, setSignInClicked] = useState(false);

  return (
    <Modal showModal={showSignInModal} setShowModal={setShowSignInModal}>
      <div className="w-full overflow-hidden shadow-xl md:max-w-md md:rounded-2xl md:border md:border-gray-200 dark:md:border-gray-800">
        <div className="flex flex-col items-center justify-center space-y-3 border-b border-gray-200 bg-white px-4 py-6 pt-8 text-center md:px-16 dark:border-gray-800 dark:bg-gray-900">
          <Image
            src="/vercel.svg"
            alt="Logo"
            className="size-10"
            width={40}
            height={40}
          />
          <Title className="text-2xl font-bold">Sign In</Title>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            This is strictly for demo purposes - only your email and profile
            picture will be stored.
          </p>
        </div>

        <div className="flex flex-col space-y-4 bg-gray-50 px-4 py-8 md:px-16 dark:bg-gray-800">
          <Button
            disabled={signInClicked}
            icon={!signInClicked ? 'google' : undefined}
            onClick={() => {
              setSignInClicked(true);
              signin();
            }}
          >
            {signInClicked ? (
              <LoadingDots color="#808080" />
            ) : (
              <>
                <p>Sign In with Google</p>
              </>
            )}
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export function useSignInModal() {
  const [showSignInModal, setShowSignInModal] = useState(false);

  const SignInModalCallback = useCallback(() => {
    return (
      <SignInModal
        showSignInModal={showSignInModal}
        setShowSignInModal={setShowSignInModal}
      />
    );
  }, [showSignInModal, setShowSignInModal]);

  return useMemo(
    () => ({ setShowSignInModal, SignInModal: SignInModalCallback }),
    [setShowSignInModal, SignInModalCallback]
  );
}
