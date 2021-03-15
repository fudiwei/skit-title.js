declare namespace SKIT.Title {
    export interface TitleStatic {
        /**
         * 设置标题。
         * @param {String} title 标题。
         */
        setTitle(title: string): void;

        /**
         * 设置标题前缀。
         * @param {String} prefix 前缀。
         */
        setPrefix(prefix: string): void;

        /**
         * 设置标题后缀。
         * @param {String} suffix 后缀。
         */
        setSuffix(suffix: string): void;

        /**
         * 设置兼容 iOS/MacOS 时的加载的内容路径，默认值："/favicon.ico"。
         * @param {String} src 加载的内容路径。
         * @param {Boolean} [flush] （可选）是否清空前缀和后缀，默认值 false。
         */
        withHackSource(src: string, flush?: boolean): void;
    }
}

declare const $$title: SKIT.Title.TitleStatic;

export default $$title;
