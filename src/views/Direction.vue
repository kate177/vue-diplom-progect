<template>
    <Container :styles="'container--body'">
        <div class="block-about">
                <div class="block-about__title">Основные направления деятельности</div>
                <ol :style="{'list-style-type':'number', 'padding-left':'24px'}" class="block-about__contact-info">
                    <li class="block-about__contact">Обеспечение соблюдения действующих в Беларуси нормативных документов по стандартизации и метрологическому обеспечению  </li>
                    <li class="block-about__contact">Комплектование и ведение фонда технических нормативных правовых актов  </li>
                    <li class="block-about__contact">Регистрация, учет и хранение подлинников документов СМК и изменений к ним  </li>
                    <li class="block-about__contact">Организация и проведение работ по внедрению нормативных документов по стандартизации и метрологическому обеспечению в образовательный процесс, научные исследования и хозяйственную деятельность университета </li>
                    <li class="block-about__contact">Содействие повышению эффективности функционирования СМК, организация и проведение внутренних  аудитов СМК университета  </li>
                    <li class="block-about__contact">Координация и контроль метрологического обеспечения, состояния и применения средств измерений  </li>
                    <li class="block-about__contact">Оказание организационной и технической помощи по аккредитации лабораторий</li>
                    <li class="block-about__contact"> Нормоконтроль научно-технической документации</li>
                </ol>
            </div>
    </Container>
</template>

<script>
import Container from '../components/Container.vue'
    export default {
    components:{
        Container
    }
}
</script>

<style lang="scss" scoped>

</style>