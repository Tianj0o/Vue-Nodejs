<template>
  <div class="about">
    <h1>{{ id ? "修改分类" : "新建分类" }}</h1>
    <el-form @submit.native.prevent="save">
      <el-form-item lable="上级分类">
        <el-select v-model="model.parent">
          <el-option
            v-for="item in parentsOptions"
            :key="item._id"
            :label="item.name"
            :value="item._id"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item lable="名称">
        <el-input v-model="model.name"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" native-type="submit">保存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  props: {
    id: {},
  },
  data() {
    return {
      model: {},
      parentsOptions: [],
    };
  },
  methods: {
    async save() {
      if (this.id) {
        await this.$http.put(`rest/categories/${this.id}`, this.model);
      } else {
        await this.$http.post("rest/categories", this.model);
      }

      this.$router.push("/categories/list");
      this.$message({
        type: "success",
        message: "保存成功",
      });
    },
    async fetch() {
      const res = await this.$http.get(`rest/categories/${this.id}`);
      this.model = res.data;
    },
    async getPaarents() {
      const res = await this.$http.get("rest/categories");
      this.parentsOptions = res.data;
    },
  },
  created() {
    this.getPaarents();
    this.id && this.fetch();
  },
};
</script>
