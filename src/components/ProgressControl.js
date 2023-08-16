import rightArrow from '../icons/right-arrow.svg'
export default function ProgressControl() {
    return(
        <section class="progress-control-container col col-lg-6 col-sm-12">
            <section class="button-group col col-12" data-phase="address">
                <button class="next">
                    下一步 
                    <img src={rightArrow} class="cursor-point" alt="" />
                </button>
            </section>
            <section class="button-group col col-12" data-phase="shipping">
                <button class="prev">
                    <object data="./public/icons/left-arrow.svg" class="cursor-point"></object>
                    上一步
                </button>
                <button class="next">
                    下一步
                    <object data="./public/icons/right-arrow.svg" class="cursor-point"></object>
                </button>
            </section>
            <section class="button-group col col-12" data-phase="credit-card">
                <button class="prev">
                    <object data="./public/icons/left-arrow.svg" class="cursor-point"></object>
                    上一步
                </button>
                <button class="next">
                    確認下單
                </button>
            </section>
        </section>
    )
}