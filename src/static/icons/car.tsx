const CarSVG = ({color}: {color: string}) => {
  return (
    <svg width="30" height="14" viewBox="0 0 30 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M19.719 10.973C19.7021 10.3542 19.8701 9.74436 20.2016 9.22153C20.5332 8.69871 21.0131 8.28664 21.58 8.03801C22.147 7.78939 22.7752 7.7155 23.3843 7.82581C23.9935 7.93611 24.5559 8.22559 24.9997 8.65724C25.4434 9.08888 25.7484 9.64307 25.8755 10.2489C26.0026 10.8548 25.9462 11.4848 25.7133 12.0585C25.4805 12.6321 25.0819 13.1232 24.5684 13.4691C24.055 13.8149 23.4501 13.9998 22.831 14C22.4278 14.006 22.0274 13.9323 21.6527 13.7834C21.278 13.6344 20.9363 13.413 20.6473 13.1319C20.3582 12.8507 20.1275 12.5153 19.9682 12.1449C19.8089 11.7744 19.7242 11.3762 19.719 10.973ZM21.89 10.973C21.8846 11.1599 21.9351 11.3442 22.0351 11.5023C22.135 11.6604 22.2798 11.785 22.4509 11.8604C22.6221 11.9357 22.8118 11.9583 22.9959 11.9252C23.18 11.8921 23.35 11.8049 23.4842 11.6746C23.6184 11.5444 23.7107 11.3771 23.7493 11.1942C23.788 11.0112 23.7711 10.8209 23.701 10.6475C23.6309 10.4741 23.5106 10.3256 23.3557 10.221C23.2007 10.1163 23.018 10.0603 22.831 10.06C22.5855 10.0571 22.3487 10.1515 22.1726 10.3225C21.9965 10.4936 21.8952 10.7275 21.891 10.973H21.89ZM4.262 10.973C4.26774 10.57 4.35282 10.1721 4.51239 9.802C4.67195 9.4319 4.90288 9.09687 5.19197 8.81604C5.48106 8.53522 5.82265 8.3141 6.19722 8.16533C6.5718 8.01656 6.97201 7.94306 7.375 7.94901C7.78033 7.93624 8.18409 8.00505 8.56231 8.15136C8.94054 8.29766 9.28551 8.51847 9.57674 8.80067C9.86797 9.08287 10.0995 9.42072 10.2577 9.79415C10.4158 10.1676 10.4973 10.569 10.4973 10.9745C10.4973 11.38 10.4158 11.7814 10.2577 12.1549C10.0995 12.5283 9.86797 12.8661 9.57674 13.1483C9.28551 13.4306 8.94054 13.6514 8.56231 13.7977C8.18409 13.944 7.78033 14.0128 7.375 14C6.97188 14.0057 6.57159 13.9319 6.197 13.7828C5.82241 13.6338 5.48086 13.4124 5.19186 13.1313C4.90286 12.8502 4.67208 12.5149 4.5127 12.1445C4.35333 11.7742 4.26848 11.3761 4.263 10.973H4.262ZM6.434 10.973C6.42883 11.1597 6.47943 11.3436 6.57932 11.5014C6.67922 11.6591 6.82388 11.7835 6.99482 11.8586C7.16576 11.9338 7.35522 11.9562 7.53899 11.9232C7.72276 11.8901 7.8925 11.803 8.02651 11.6729C8.16052 11.5429 8.25273 11.3759 8.29134 11.1932C8.32996 11.0105 8.31323 10.8205 8.24329 10.6473C8.17336 10.4742 8.0534 10.3258 7.89873 10.2212C7.74407 10.1166 7.56172 10.0605 7.375 10.06C7.12954 10.0573 6.89297 10.1518 6.71689 10.3228C6.5408 10.4939 6.43947 10.7276 6.435 10.973H6.434ZM26.761 11.349C26.7806 11.2278 26.7937 11.1056 26.8 10.983C26.7678 9.98498 26.3487 9.0386 25.6313 8.34399C24.914 7.64939 23.9545 7.26102 22.956 7.26102C21.9575 7.26102 20.998 7.64939 20.2807 8.34399C19.5633 9.0386 19.1442 9.98498 19.112 10.983C19.1182 11.1056 19.1312 11.2278 19.151 11.349H11.051C11.0703 11.2278 11.083 11.1056 11.089 10.983C11.0809 10.4861 10.975 9.99558 10.7774 9.53957C10.5797 9.08356 10.2941 8.67096 9.937 8.32533C9.57985 7.97969 9.15811 7.7078 8.69587 7.52519C8.23363 7.34257 7.73994 7.2528 7.243 7.26101C6.24014 7.2455 5.27213 7.62866 4.55158 8.32634C3.83102 9.02402 3.41684 9.97917 3.4 10.982C3.40636 11.1046 3.41904 11.2267 3.438 11.348H0.509C0.443171 11.3492 0.377754 11.3374 0.316505 11.3132C0.255257 11.2891 0.199382 11.2531 0.152089 11.2072C0.104795 11.1614 0.0670144 11.1067 0.0409149 11.0463C0.0148153 10.9858 0.000910982 10.9208 0 10.855L0 8.94201C0.00184142 8.83768 0.0449894 8.73835 0.119978 8.6658C0.194967 8.59325 0.295672 8.5534 0.4 8.55501V7.11101C0.403745 6.78367 0.517389 6.46709 0.722682 6.21211C0.927976 5.95712 1.21301 5.77853 1.532 5.70501L6.716 4.45301L10.568 1.45301C11.7883 0.508844 13.2881 -0.00235085 14.831 8.73995e-06H21.738C22.176 -0.0013529 22.5996 0.15643 22.93 0.444009L26.33 3.40901L27.423 3.35101C27.7962 3.3263 28.1649 3.4434 28.4554 3.67887C28.746 3.91434 28.9369 4.25082 28.99 4.62101L29.49 8.55801C29.5559 8.55668 29.6214 8.56841 29.6828 8.5925C29.7442 8.6166 29.8002 8.65259 29.8476 8.69841C29.895 8.74423 29.9328 8.79897 29.959 8.85949C29.9852 8.92 29.9991 8.98509 30 9.05101V10.851C29.9992 10.917 29.9854 10.9822 29.9593 11.0428C29.9332 11.1035 29.8953 11.1583 29.8479 11.2043C29.8005 11.2502 29.7445 11.2863 29.683 11.3104C29.6216 11.3346 29.556 11.3463 29.49 11.345L26.761 11.349ZM11.448 2.75501L9.6 4.19101L19.237 3.71901V1.54901H14.984C13.704 1.54637 12.4596 1.97076 11.448 2.75501ZM20.842 3.63801L24.024 3.48201L22.057 1.76901C21.8942 1.62689 21.6851 1.54902 21.469 1.55001H20.843L20.842 3.63801Z" fill={color}/>
    </svg>
  )
}

export default CarSVG