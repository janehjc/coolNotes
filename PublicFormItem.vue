<template>
    <el-col :span="span">
        <el-form-item :label="label" :prop="prop" :label-width="labelWidth">
            <el-input
                    v-if="type === 'input'"
                    :value="value"
                    @input="$emit('input', $event)"
                    :clearable="!readonly && !show && clearable"
                    :class="show && 'public-showInput'"
                    :readonly="readonly || show"
                    :type="inputType"
                    v-bind="$attrs"
            >
                <slot></slot>
            </el-input>
            <el-select
                    v-if="type === 'select'"
                    :value="value"
                    @input="$emit('input', $event)"
                    @change="$emit('change',$event)"
                    :clearable="!readonly && !show && clearable"
                    :class="show && 'public-showInput'"
                    :readonly="readonly || show"
                    :disabled="readonly || show"
                    :placeholder="readonly || show ? '' : '请选择'"
                    :size="size"
                    v-bind="$attrs"
            >
                <el-option
                        v-for="(option, index) in options"
                        :key="index"
                        :value="option.value"
                        :label="option.label"
                >
                </el-option>
            </el-select>
            <el-date-picker
                    v-if="type === 'date'"
                    :value="value"
                    @input="$emit('input', $event)"
                    :clearable="!readonly && !show && clearable"
                    :class="show && 'public-showInput'"
                    :readonly="readonly || show"
                    :editable="false"
                    :type="dateType"
                    :value-format="valueFormat"
                    v-bind="$attrs"
            ></el-date-picker>
            <div v-if="type === 'img'">
                <img v-for="view in viewlist"
                     :src="view.fileUrl"
                     :key="view.fileUrl"
                     @click="$emit('click',view.fileUrl)"
                     class="public-form-item-img"
                >
            </div>
        </el-form-item>
    </el-col>
</template>

<script>
    /**
     * @name public-form-item组件
     * @description 封装表单项
     *
     * @param label: 表单标签 {type: String, required: true, default: "label"}
     * @param value: 对应Mvo值 {type: String, required: true}
     * @param prop: 用于校验 {type: String, default: ""}
     * @param span: 跨列比例 共24列，默认为8，占1/3 {type: Number, default: 8}
     * @param clearable: 是否可清空 {type: Boolean, default: true}
     * @param show: 是否为展示信息 (用于纯展示的信息) {type: Boolean, default: false}
     * @param readonly: 是否只读 (用于不允许用户输入的输入框) {type: Boolean, default: false}
     * @param type: 表单类型 (input/select/date) {type: String, default: 'input'}
     * @param options: select类型————选项option数组 (用于不允许用户输入的输入框) {type: Boolean, default: false}
     * @param dateType: date类型————日期类型 (year/month/date/dates/week/datetime/datetimerange/daterange) {type: String, default: 'date'}
     * @param viewlist: img类型————图片对象数组
     *
     * @author linzixiong
     * @version 1.0.1
     */

    export default {
        name: "public-form-item",
        props: {
            // 表单标签
            label: {
                type: String,
                required: true,
                default: "label",
            },
            // 对应Mvo值
            value: {
                type: String,
                // linzixiong 去掉required，规避null赋值的报错问题
                // required: true,
            },
            // 用于校验、清空
            prop: {
                type: String,
                default: "",
            },
            // 跨列比例 共24列，默认为8，占1/3
            span: {
                type: Number,
                default: 8,
            },
            // 是否可清空
            clearable: {
                type: Boolean,
                default: true,
            },
            // 是否为展示信息 (用于纯展示的信息)
            show: {
                type: Boolean,
                default: false,
            },
            // 是否只读 (用于不允许用户输入的输入框)
            readonly: {
                type: Boolean,
                default: false,
            },
            // 表单类型 (input/select/date) todo 增加类型
            type: {
                type: String,
                default: 'input',
            },
            // label宽度
            labelWidth: {
                type: String
            },
            // select类型————选项option数组
            options: {
                type: Array,
                default: function () {
                    return [];
                },
            },
            // date类型————类型 year/month/date/dates/week/datetime/datetimerange/daterange
            dateType: {
                type: String,
                default: 'date',
            },
            inputType: {
                type: String,
                default: 'text',
            },
            //图片视图
            viewlist: {
                type: Array,
                default: function () {
                    return [];
                }
            },
            size: {
                type: String,
                default: 'mini'
            }
        },
        data: function () {
            return {}
        },
        computed: {
            valueFormat: function () {
                switch (this.dateType) {
                    case 'date':
                        return 'yyyy-MM-dd';
                    case 'month':
                        return 'yyyy-MM';
                    case 'year':
                        return 'yyyy';
                    default:
                        return '';
                }
            }
        },
        filters: {},
        methods: {}
    }
</script>

<style scoped>

</style>
