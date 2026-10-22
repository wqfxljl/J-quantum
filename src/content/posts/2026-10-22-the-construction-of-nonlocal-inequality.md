---
title: The construction of nonlocal inequality
category: research
date: 2026-10-22
status: exploring
---
# 网络非局域性不等式的构造

## 一、四问题分析框架

我认为所有不等式的构造都是在回答以下四个问题：

1. **如何选择关联项？** 为什么选择这些关联项，选择的依据是什么？
2. **如何组合关联项？** 为什么采用特定的系数、幂次或非线性形式？这样的组合有什么作用？
3. **如何利用网络约束？** 网络中的源独立性、测量结构等约束，具体怎样进入不等式？
4. **如何证明构造有效？** 是否得到紧经典界和量子违反？是否具有不同的检测能力？

重点是理解**关联项的选择原则和组合依据**，而不仅仅是记录最终的不等式。

同时区分作者在原文中明确说明的构造动机，以及我根据数学推导总结出的构造思想。

---

## 1. Bilocal versus nonbilocal correlations in entanglement-swapping experiments

**Branciard et al., Physical Review A 85, 032119 (2012)**

论文：https://arxiv.org/abs/1112.4502

### 网络场景

Bilocal 网络：Alice–Bob–Charlie，由两个独立源组成。

经典模型满足

$$
p(\lambda_1,\lambda_2)
=p(\lambda_1)p(\lambda_2).
$$

### 测量设置

Alice 和 Charlie 各有两个二值测量。

Bob 分别考虑：

- **2–2：** 两个二值测量。
- **1–4：** 单次四输出测量。
- **1–3：** 单次三输出测量。

### 不等式

以 2–2 场景为例，定义

$$
I=\langle A_+B_0C_+\rangle,
\qquad
J=\langle A_-B_1C_-\rangle,
$$

其中

$$
A_\pm=\frac{A_0\pm A_1}{2},
\qquad
C_\pm=\frac{C_0\pm C_1}{2}.
$$

得到

$$
\boxed{\sqrt{|I|}+\sqrt{|J|}\le1.}
$$

1–4 和 1–3 场景也构造了相应的平方根型 bilocal 不等式，其中 Bob 的有效关联定义需要根据输出结构调整。

### 四问题分析

#### ① 如何选择关联项？

这一点原文有明确说明，见 Section III.A.2。

作者最初的目标是寻找对噪声具有较强鲁棒性的纠缠交换量子关联。他们首先通过数值方法寻找适合的测量设置，随后发现所得量子关联具有特定的对称性。

**这些对称性启发了作者对 \(I,J\) 的定义。**

因此，作者并不是先任意写出两个关联项，再观察是否能够证明不等式，而是受希望检测的量子关联及其对称性启发。

从数学结构来看，

$$
I=\langle A_+B_0C_+\rangle
$$

提取两端测量的对称组合，而

$$
J=\langle A_-B_1C_-\rangle
$$

提取反对称组合。

这使 \(I,J\) 能够共同利用两端测量之间的约束。

**我的理解：** 作者先利用目标量子关联的对称性确定值得研究的关联项，再寻找这些关联项在 bilocal 经典模型中必须满足的约束。

#### ② 如何组合关联项？

作者采用

$$
\mathcal S=\sqrt{|I|}+\sqrt{|J|}.
$$

为什么是平方根？

由经典 bilocal 模型，可以分别得到

$$
|I|\le\alpha_+\gamma_+,
\qquad
|J|\le\alpha_-\gamma_-,
$$

其中 \(\alpha_\pm,\gamma_\pm\) 是两个独立源对应的非负参数。

如果直接相加，只能得到

$$
|I|+|J|
\le\alpha_+\gamma_++\alpha_-\gamma_-.
$$

但采用平方根后，可以利用 Cauchy–Schwarz：

$$
\begin{aligned}
\sqrt{|I|}+\sqrt{|J|}
&\le\sqrt{\alpha_+\gamma_+}
+\sqrt{\alpha_-\gamma_-}\\
&\le
\sqrt{(\alpha_++\alpha_-)
(\gamma_++\gamma_-)}.
\end{aligned}
$$

这样，原本混合在一起的两个独立源参数，被转化为分别属于 Alice 和 Charlie 的约束。

因此，**平方根形式的关键作用，是将两个独立源产生的乘积约束组合成一个可以统一求界的表达式。**

#### ③ 如何利用网络约束？

这一步需要看源独立性到底在哪里发挥作用。

在经典模型中，Alice 的条件平均响应记为

$$
a_x(\lambda_1)\in[-1,1],
$$

Charlie 的条件平均响应记为

$$
c_z(\lambda_2)\in[-1,1].
$$

定义

$$
a_\pm(\lambda_1)
=\frac{a_0(\lambda_1)\pm a_1(\lambda_1)}2,
$$

$$
c_\pm(\lambda_2)
=\frac{c_0(\lambda_2)\pm c_1(\lambda_2)}2.
$$

由于 Bob 的条件平均响应满足 \(|b_y|\le1\)，并且两个源相互独立，有

$$
\begin{aligned}
|I|
&\le
\int d\lambda_1\,p(\lambda_1)|a_+(\lambda_1)|\\
&\qquad\times
\int d\lambda_2\,p(\lambda_2)|c_+(\lambda_2)|\\
&=\alpha_+\gamma_+.
\end{aligned}
$$

同理，

$$
|J|\le\alpha_-\gamma_-.
$$

**源独立性在这里使两个端点的积分能够分解。** 如果两个源允许任意相关，就不能进行这一乘积分解。

另一方面，对于任意经典二值响应，

$$
|a_+|+|a_-|
=\max\{|a_0|,|a_1|\}\le1.
$$

因此，

$$
\alpha_++\alpha_-\le1.
$$

Charlie 同样满足

$$
\gamma_++\gamma_-\le1.
$$

代入问题②中的组合不等式，

$$
\begin{aligned}
\sqrt{|I|}+\sqrt{|J|}
&\le
\sqrt{(\alpha_++\alpha_-)
(\gamma_++\gamma_-)}\\
&\le1.
\end{aligned}
$$

由此得到 bilocal 不等式。

**这里实际上同时利用了两种约束：**

- 源独立性：使关联项具有乘积上界；
- 端点响应关系：使对称和反对称组合的贡献不能同时任意增大。

平方根与求和的组合使这两种约束可以共同发挥作用。

#### ④ 如何证明构造有效？

**经典方面：**

作者不仅证明了

$$
\sqrt{|I|}+\sqrt{|J|}\le1,
$$

还构造了显式 bilocal 分解，证明在所考虑的 \((I,J)\) 投影空间中，该不等式是紧的。

需要注意，这不意味着一个不等式就能够完整刻画所有 bilocal 关联。

**量子方面：**

对于两对独立 singlet 态和适当的纠缠交换测量策略，可以得到

$$
I=J=\frac12.
$$

因此

$$
\mathcal S_Q=\sqrt2>1.
$$

说明量子关联能够违反经典 bilocal 约束。

进一步考虑白噪声时，对于论文研究的特定纠缠交换关联族，

$$
I=J=\frac V2.
$$

于是

$$
\mathcal S(V)=\sqrt{2V}.
$$

非 bilocal 违反条件为

$$
\boxed{V>\frac12.}
$$

作者还通过经典分解证明，该阈值对于所讨论的关联族是最优的。

因此，这种构造确实能够在标准 Bell 非局域性判据尚不能检测到违反的某些情况下，揭示源独立性下的非经典关联。

### 构造思想总结

这篇工作的构造过程可以理解为：

**寻找具有特定性质的量子关联 → 利用对称性选择关联项 → 通过平方根组合适配独立源乘积结构 → 推导紧 bilocal 约束并验证量子违反。**

最值得注意的是，关联项 \(I,J\) 的选择与量子关联的对称性有关，而平方根组合使经典源独立性和端点响应约束得到显化。

这也提示我们：分析其他不等式时，不能只看作者用了什么数学不等式证明经典界，还需要回到最初的关联项选择过程，理解作者为什么认为这种组合值得研究。