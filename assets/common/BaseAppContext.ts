const { ccclass, property } = cc._decorator;

declare global {
    interface Window {
        baseAppContext: BaseAppContext;
    }
    let baseAppContext: BaseAppContext;
}

@ccclass
export class BaseAppContext extends cc.Component {


}
