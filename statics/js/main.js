function moveSlide(_this,targetData){
    let _parent = $(_this).closest('.slide-button-list');
    let targetGorup = _parent.siblings('.slide-content-list');
    let target = '.slide__item[data-slide="'+targetData+'"]';
    let activeClass = 'is-active';

    targetGorup.find(target).addClass(activeClass).siblings().removeClass(activeClass);
    $(_this).find('.icon__box').addClass('is-active').parent(".icon-list__item").siblings().find('.icon__box').removeClass('is-active');
    $(_this).find('.icon-list__text-box').addClass('is-text-active').parent(".icon-list__item").siblings().find('.icon-list__text-box').removeClass('is-text-active');
}
