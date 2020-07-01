import { h } from 'vue'

const App = {
    render() {
        return h('div', {
            id: 'hello'
        }, [
            h('span', 'world')
        ])
    }, // <div id="hello"><span>world</span></div>

    //v-if="ok"
    renderVif() {
        return this.ok
            ? h('div', { id: 'hello' }, [h('span', 'world')])
            : this.otherCondition
                ? h('p', 'other branch')
                : h('span')
    },

    // v-for="item in list"
    renderVfor() {
        return this.list.map(item => {
            return h('div', {key: item.id}, item.text)
        })
    }
}

const Stack = {
    render() {
        const slot = this.$slots.default
            ? this.$slots.default()
            : []

        return h('div', { class: 'stack' }, slot.map(child => {
            return h('div', { class: `mt-${this.$props.size}` }, [
                child
            ])
        }))
    }
}