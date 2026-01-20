import { Metadata } from 'next';
export const metadata: Metadata = {
    title: 'Testpage',
    description: '',
    openGraph: {
        title: 'О нашей компании | Мой Сайт',
        description: 'Узнайте больше о нашей компании и нашей миссии',
        url: 'https://mysite.com/about',
        images: [
            {
                url: '/og-about.jpg',
                width: 1200,
                height: 630,
                alt: 'О нашей компании',
            },
        ],
        type: 'website',
    },

    twitter: {
        card: 'summary_large_image',
        title: 'О нашей компании | Мой Сайт',
        description: 'Узнайте больше о нашей компании и нашей миссии',
        images: ['/og-about.jpg'],
    },
};
export default function Testpage() {
    return (
        <>
            <div className={'h-screen w-full m-auto max-w-[2560px] max-h-[1374px] overflow-hidden flex flex-col justify-start'}>
                <header className={'flex align-middle p-2 border-b border-gray-800'} style={{height: '30px'}}>
                    <p className={'text-xs'}>+7(999)980-98-98</p>
                </header>
                <main style={{height: 'calc(100vh - 30px)'}}>
                    <div className={'h-full flex flex-row justify-between'}>
                        <div className={'w-[70%]'}>
                            <img className={'h-full w-full'}
                                 style={{objectFit: 'cover'}}
                                 src="https://myheat.net/assets/images/products/290/mh-ex-termostat-s-1.png"
                                 alt=""/>
                        </div>
                        <aside className={'w-[30%] h-full transition flex flex-col justify-start border-l border-gray-800'}>
                            <div className={'p-3 mt-3'}>
                                <img className={'w-[120px]'} src="https://new.myheat.net/res/img/logo-new.png" alt=""/>
                            </div>
                            <div className={'pt-3 px-3'}>
                                <h2 className={'text-2xl font-bold'}>Комнатный термостат MyHeat (белый)</h2>
                            </div>
                            <div className={'p-5 h-full'}>
                                <div className={'slider flex flex-col mt-1 py-2 px-1 overflow-y-auto'}>

                                    <div>
                                        <p className={'text-sm'}>
                                            Универсальный комнатный термостат MyHeat со встроенным датчиком температуры
                                            и влажности предназначен для управления температурным режимом помещения и
                                            стяжки тёплого пола*.
                                        </p>
                                        <p className={'text-sm'}>Комнатный термостат MyHeat поддерживает как проводное**, так и беспроводное*** подключение к контроллерам MyHeat. Он позволяет организовать зональное управление и локально изменять температурный режим одновременно в помещении и стяжке теплого пола*. Все изменения температурного режима синхронизируются с мобильным приложением и личным кабинетом MyHeat.</p>
                                        <div>
                                            <h4 className={'text-xl mt-3 mb-1'}>Преимущества:</h4>
                                            <ul>
                                                <li className={'text-sm'}>✔ Универсальность подключения (проводное и беспроводное).</li>
                                                <li className={'text-sm'}>✔ Зональное управление температурой в помещении и стяжке теплого пола.</li>
                                                <li className={'text-sm'}>✔ Синхронизация с мобильным приложением и личным кабинетом MyHeat.</li>
                                                <li className={'text-sm'}>✔ Компактный и стильный дизайн.</li>
                                            </ul>
                                            <p className={'text-sm mt-3'}>*Для управления температурным режимом теплых полов требуется проводной датчик температуры в колбе. Данная функция доступна только при проводном подключении по шине EXT и при беспроводном подключении.</p>
                                            <p className={'text-sm mt-3'}>**Проводное подключение по шине связи 1-wire поддерживается контроллерами с версией прошивки не ниже 127: MyHeat GO!, MyHeat GO!+, MyHeat Smart 2, MyHeat Pro; блоками расширения с версией не ниже: MyHeat RL6, MyHeat RL6S.
                                            Проводное подключение по шине EXT поддерживается контроллером MyHeat Pro с версией прошивки не ниже 127.</p>
                                            <p className={'text-sm mt-3'}>*** Беспроводное подключение осуществляется к  радиомодулям MyHeat RDT2 версии с контроллерами с версией прошивки не ниже 127: MyHeat Smart 2, MyHeat Pro; блоками расширения с версией не ниже: MyHeat RL6, MyHeat RL6S; также контроллерам с версией прошивки не ниже 127 со встроенным радиомодулем - MyHeat GO!, MyHeat GO!+.</p>
                                        </div>
                                    </div>

                                    {/*<div>*/}
                                    {/*    <form>*/}
                                    {/*        <div className="mb-3">*/}
                                    {/*            <label htmlFor="emailInput"*/}
                                    {/*                   className="block mb-2 text-sm font-medium text-gray-300">*/}
                                    {/*                Ваше имя*/}
                                    {/*            </label>*/}
                                    {/*            <input*/}
                                    {/*                type="email"*/}
                                    {/*                id="emailInput"*/}
                                    {/*                className="bg-gray-700 border border-gray-600 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 placeholder-gray-400"*/}
                                    {/*                placeholder=""*/}
                                    {/*                required*/}
                                    {/*            />*/}
                                    {/*        </div>*/}
                                    {/*        <div className="mb-10">*/}
                                    {/*            <label htmlFor="emailInput"*/}
                                    {/*                   className="block mb-2 text-sm font-medium text-gray-300">*/}
                                    {/*                Ваш email адрес*/}
                                    {/*            </label>*/}
                                    {/*            <input*/}
                                    {/*                type="email"*/}
                                    {/*                id="emailInput"*/}
                                    {/*                className="bg-gray-700 border border-gray-600 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 placeholder-gray-400"*/}
                                    {/*                placeholder="name@company.com"*/}
                                    {/*                required*/}
                                    {/*            />*/}
                                    {/*        </div>*/}
                                    {/*        <button type="reset"*/}
                                    {/*                className="cursor-pointer w-full text-gray-300 border border-gray-600 hover:bg-gray-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-gray-800 font-medium rounded-lg text-sm px-5 py-3 text-center transition-colors">*/}
                                    {/*            <span className={'font-bold'}>Очистить форму</span>*/}
                                    {/*        </button>*/}
                                    {/*        <button type="submit"*/}
                                    {/*                className="cursor-pointer mt-3 w-full text-white bg-gradient-to-r from-orange-500 via-orange-600 to-red-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-orange-800 font-medium rounded-lg text-sm px-5 py-3 text-center shadow-lg transition-all">*/}
                                    {/*            <span className={'font-bold'}>Отправить</span>*/}
                                    {/*        </button>*/}
                                    {/*    </form>*/}
                                    {/*</div>*/}
                                    <div>
                                        <div
                                            className="slider-dots flex flex-row justify-center align-middle gap-3 mt-6 mb-3">
                                        <div className="slider-dot active"></div>
                                            <div className="slider-dot"></div>
                                            <div className="slider-dot"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className={'mt-auto p-2 flex flex-col align-bottom h-[50px] border-t border-gray-800'}>
                                <span className={'text-xs text-center mt-1'}>Lorem ipsum dolor sit amet.</span>
                                <span className={'text-xs text-center'}>(c) 2026</span>
                            </div>
                        </aside>
                    </div>
                </main>
            </div>
        </>
    );
}